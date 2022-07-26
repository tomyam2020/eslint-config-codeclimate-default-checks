module.exports = {
  plugins: [
    "sonarjs",
    "max-methods-per-class",
    "max-return-statements-per-function",
    "complex-logic",
  ],
  rules: {
    "max-params": ["warn", 4],
    "complex-logic/complex-logic": ["warn", 4],
    "max-lines": ["warn", 250],
    "sonarjs/cognitive-complexity": ["warn", 4],
    "max-methods-per-class/max-methods-per-class": ["warn", 20],
    "max-lines-per-function": ["warn", 25],
    "max-depth": ["warn", 4],
    "max-return-statements-per-function/max-return-statements-per-function": [
      "warn",
      4,
    ],
  },
};
