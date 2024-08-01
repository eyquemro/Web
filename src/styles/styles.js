import { Height, Margin } from "@mui/icons-material";

//Styles pour les TextFields
export const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Couleur du contour normal
    },
    "&:hover fieldset": {
      borderColor: "white", // Couleur du contour au survol
    },
    "&.Mui-focused fieldset": {
      borderColor: "white", // Couleur du contour lorsqu'il est focalisé
    },
  },
  "& .MuiInputBase-input": {
    color: "white", // Couleur du texte
  },
  "& .MuiInputLabel-root": {
    color: "white", // Couleur du texte de l'étiquette
    "&.Mui-focused": {
      color: "white", // Couleur du texte de l'étiquette lorsqu'il est focalisé
    },
  },
};

// Styles pour les boutons
export const buttonStyle = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "1.5rem",
  textAlign: "center",
  flex: 1, // Chaque bouton occupe une largeur égale
  color: "white",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:focus": {
    outline: "none", // Supprime le contour de focus par défaut
  },
  "@media (max-width: 1280px)": {
    fontSize: "1.4em",
  },
  "@media (max-width: 960px)": {
    fontSize: "1.3rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
  },
};

// Styles pour l'AppBar
export const appBarStyle = {
  background: "rgba(255, 255, 255, 0.2)", // Fond de la AppBar avec opacité
  backdropFilter: "blur(8px)", // Effet de flou en arrière-plan
  alignItems: "center", // Centre verticalement
  boxShadow: "none", // Enlève l'ombre pour un look net

};

// Styles pour la Toolbar
export const toolbarStyle = {
  alignItems: "center", // Centre verticalement
  justifyContent: "center", // Centrage horizontal
  width: "100%", // Assure que la Toolbar occupe toute la largeur de l'AppBar
};

// Styles pour les formulaires
export const formStyle = {
  backgroundColor: "rgba(58, 197, 231, 0.5)", // Couleur de fond bleu clair
  padding: "1rem", // Espacement interne pour le contenu
  margin: "1rem",
  borderRadius: "8px", // Arrondir les coins
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Ombre légère pour l'effet de profondeur
  display: "flex",
  flexDirection: "column", // Affiche les éléments du formulaire en colonne
  gap: "10px", // Espace entre les éléments du formulaire
};

export const boxStyle = {
  backgroundColor: "rgba(58, 197, 231, 0.5)", // Couleur de fond bleu clair
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Ombre légère pour l'effet de profondeur
  flexDirection: "column", // Affiche les éléments du formulaire en colonne
  display: "flex",
  minWidth: "25rem",
  borderRadius: "8px", // Arrondir les coins
  padding: "1rem", // Espacement interne pour le contenu
  margin: "1rem",
};

export const alignementStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  position: "relative",
};
