import { useState, useEffect } from 'react';

const useColorChecker = (color) => {
    if (!color) return;
    const isColorDark = (color) => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        const threshold = 0.5;
        return luminance < threshold ? 'dark' : 'light';
    };
    const type = isColorDark(color);
    return type;
};

export default useColorChecker;
