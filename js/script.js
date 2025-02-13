// Ambil elemen-elemen yang dibutuhkan
const inputField = document.getElementById("main-input");
const conversionType = document.getElementById("conversion-type");
const resultField = document.getElementById("main-result");
const caraKonversiField = document.getElementById("cara-konversi");
const convertButton = document.getElementById("convert-button");
const resetButton = document.getElementById("reset-button");

// Fungsi untuk konversi suhu
function convertTemperature() {
    const inputValue = parseFloat(inputField.value); // Ambil nilai input
    const conversion = conversionType.value; // Ambil tipe konversi
    let result = 0; // Variabel hasil
    let explanation = ""; // Variabel untuk cara konversi
    let resultUnit = ""; // Variabel untuk satuan hasil

    if (isNaN(inputValue)) {
        resultField.value = "Masukkan angka valid!";
        caraKonversiField.value = "";
        return;
    }

    switch (conversion) {
        case "c-to-f":
            result = (inputValue * 9) / 5 + 32;
            explanation = `${inputValue}°C × (9/5) + 32`;
            resultUnit = "°F";
            break;

        case "f-to-c":
            result = ((inputValue - 32) * 5) / 9;
            explanation = `(${inputValue}°F - 32) × (5/9)`;
            resultUnit = "°C";
            break;

        case "c-to-k":
            result = inputValue + 273.15;
            explanation = `${inputValue}°C + 273.15`;
            resultUnit = "K";
            break;

        case "k-to-c":
            result = inputValue - 273.15;
            explanation = `${inputValue}K - 273.15`;
            resultUnit = "°C";
            break;

        case "f-to-k":
            result = ((inputValue - 32) * 5) / 9 + 273.15;
            explanation = `(${inputValue}°F - 32) × (5/9) + 273.15`;
            resultUnit = "K";
            break;

        case "k-to-f":
            result = ((inputValue - 273.15) * 9) / 5 + 32;
            explanation = `(${inputValue}K - 273.15) × (9/5) + 32`;
            resultUnit = "°F";
            break;

        default:
            resultField.value = "Tipe konversi tidak valid!";
            caraKonversiField.value = "";
            return;
    }

    // Tampilkan hasil dengan dua angka desimal dan satuan
    resultField.value = `${result.toFixed(2)} ${resultUnit}`;
    caraKonversiField.value = explanation;
}

// Fungsi untuk reset form
function resetForm() {
    inputField.value = "";
    resultField.value = "";
    caraKonversiField.value = "";
    conversionType.value = "c-to-f";
}

// Tambahkan event listener pada tombol
convertButton.addEventListener("click", convertTemperature);
resetButton.addEventListener("click", resetForm);
