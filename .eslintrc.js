module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Autoriser les variables non utilisées
    "@typescript-eslint/no-unused-vars": "off",

    // Autoriser l'utilisation du type 'any'
    "@typescript-eslint/no-explicit-any": "off",

    // Autoriser les interfaces vides
    "@typescript-eslint/no-empty-interface": "off",

    // Désactiver les warnings de prop-types pour React (si TS est utilisé)
    "react/prop-types": "off",

    // Exemple : si tu veux, tu peux aussi désactiver certains warnings de style
    "no-console": "warn",
  },
};
