import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load dataset (replace with your actual CSV filename)
df = pd.read_csv("crop_model.csv")  # change to your actual file name

# Separate features and target
X = df.drop("label", axis=1)
y = df["label"]

# Split into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model to file
joblib.dump(model, "crop_model.pkl")
print("✅ Model trained and saved as crop_model.pkl")
