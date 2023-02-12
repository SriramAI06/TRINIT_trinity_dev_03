from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        location = request.form["location"]
        recommended_plants = get_recommended_plants(location)
        return render_template("plant_recommendation.html", recommended_plants=recommended_plants)
    return render_template("plant_recommendation.html")

def get_recommended_plants(location):
    # Determine the recommended plants based on the user's location
    if location == "chennai":
        return "Salal, Sword Fern, Western Red Cedar"
    elif location == "Miami":
        return "Cocoplum, Sea Grape, Thatch Palm"
    else:
        return "Sorry, we don't have recommendations for your location."

if __name__ == "__main__":
    app.run()
