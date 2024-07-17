document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('btn');

    button.addEventListener('click', () => {
        const tinggi = parseInt(document.getElementById('Tinggi').value);
        const berat = parseInt(document.getElementById('Berat').value);
        const hasil = document.getElementById('output');
        let status_tinggi = false;
        let status_berat = false;

        if (isNaN(tinggi) || tinggi <= 0) {
            document.getElementById("Tinggi_Error").innerHTML = 'Masukan tinggi yang valid';
        } else {
            document.getElementById('Tinggi_Error').innerHTML = '';
            status_tinggi = true;
        }

        if (isNaN(berat) || berat <= 0) {
            document.getElementById("Berat_Error").innerHTML = 'Masukan berat yang valid';
        } else {
            document.getElementById('Berat_Error').innerHTML = '';
            status_berat = true;
        }

        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            alert('Pilih jenis kelamin');
            return;
        }

        if (status_tinggi && status_berat) {
            const bmi = (berat / ((tinggi / 100) * (tinggi / 100))).toFixed(2);
            const selectedGender = gender.value;

            if (bmi < 18.6) {
                hasil.innerHTML = `Jenis kelamin: ${selectedGender}<br>Anda Kekurangan berat badan: ${bmi}<br>Anda termasuk kekurangan badan,kondisi ini dapat menyebabkan berbagai masalah kesehatan seperti melemahnya sistem kekebalan tubuh, malnutrisi, osteoporosis, dan masalah kesuburan.`;
            } else if (bmi >= 18.6 && bmi < 24.9) {
                hasil.innerHTML = `Jenis kelamin: ${selectedGender}<br>Normal: ${bmi}<br>Anda normal,Individu dalam kisaran ini dianggap memiliki risiko lebih rendah terkena penyakit kronis seperti penyakit jantung, diabetes, dan hipertensi. Mempertahankan BMI normal dikaitkan dengan kesehatan dan kesejahteraan yang baik secara keseluruhan.`;
            } else {
                hasil.innerHTML = `Jenis kelamin: ${selectedGender}<br>Kelebihan berat badan: ${bmi}<br>Anda kelebihan berat badan,dapat meningkatkan risiko berbagai masalah kesehatan, termasuk penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan kanker tertentu. Hal ini juga dapat menyebabkan masalah persendian dan sleep apnea.`;
            }
        } else {
            alert("Formulir error");
            hasil.innerHTML = '';
        }
    });
});