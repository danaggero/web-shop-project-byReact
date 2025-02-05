import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
};

const Card: React.FC<CardProps> = ({ title, subtitle }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src="src\assets\images\NonePic.png"
          alt="Product Image"
          style={{ width: "48px", height: "48px" }}
        />
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    padding: "16px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    fontFamily: "'Arial', sans-serif",
  },
  imageContainer: {
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
  },
  imageIcon: {
    color: "#9ca3af",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#111827",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5",
  },
};

export default Card;
