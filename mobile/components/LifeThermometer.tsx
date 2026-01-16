import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  interpolateColor,
  Easing
} from 'react-native-reanimated';

export const LifeThermometer = () => {
  // 1. 生命值 SharedValue (0-100)，就像一个容器里的水位
  const progress = useSharedValue(0);

  // 2. 动画样式：水的高度和颜色随 progress 变化
  const animatedWaterStyle = useAnimatedStyle(() => {
    // 颜色插值：从 0(蓝) 到 100(红)
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 20, 50, 80, 100],
      ['#A5F3FC', '#7DD3FC', '#FDE047', '#FB923C', '#EF4444'] // 对应你的 PRD 语义
    );

    return {
      height: `${progress.value}%`,
      backgroundColor,
    };
  });

  // 3. 交互逻辑
  const handlePressIn = () => {
    // 按下时，水位在 5 秒内（5000ms）匀速注满到 100
    progress.value = withTiming(100, {
      duration: 5000,
      easing: Easing.linear,
    });
  };

  const handlePressOut = () => {
    // 松开时，水位停在当前位置（不回落，代表记录了状态）
    // 或者你可以让它慢慢回落，取决于你想要记录的逻辑。
    // 这里我们先让它停住。
    progress.value = progress.value; 
  };

  return (
    <View style={styles.container}>
      {/* 操作提示 */}
      <Text style={styles.hint}>长按 记录生命热度</Text>

      <View style={styles.thermometerContainer}>
        {/* 4. 玻璃外壳 */}
        <Pressable 
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut}
          style={styles.glassShell}
        >
          {/* 5. 内部的“水” (Animated View) */}
          <Animated.View style={[styles.water, animatedWaterStyle]} />
        </Pressable>

        {/* 6. 右侧刻度 */}
        <View style={styles.scaleContainer}>
          {[100, 80, 60, 40, 20, 0].map((tick) => (
            <Text key={tick} style={styles.scaleText}>— {tick}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hint: {
    marginBottom: 30,
    color: '#999',
    fontSize: 14,
    letterSpacing: 1,
  },
  thermometerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  glassShell: {
    width: 60,
    height: 300,
    backgroundColor: '#E5E7EB',
    borderRadius: 30,
    overflow: 'hidden', // 确保水不会溢出容器
    borderWidth: 4,
    borderColor: '#FFF',
    // 阴影增加质感
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  water: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  scaleContainer: {
    marginLeft: 15,
    height: 300,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  scaleText: {
    fontSize: 12,
    color: '#CCC',
    fontWeight: '600',
  },
});