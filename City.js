import './city.css'
function City() {
    let city = "uttarkashi"; // Default to "uttarkashi" if no city prop is provided
    return (
        <div className="city">
            <h4>{city}</h4>
        </div>
    );
}

export default City;