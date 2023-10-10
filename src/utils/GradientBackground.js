import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground({ children, colors, style }) {
    return (
        <LinearGradient
            colors={colors}
            style={style}
        >
            {children}
        </LinearGradient>
    );
}
