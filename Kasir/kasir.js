function tambahkanBarang() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var namaBarang = document.getElementById("namaBarang").value;

  var totalBelanja =
    parseFloat(
      document.getElementById("totalBelanja").innerHTML.replace("Rp ", "")
    ) || 0;
  totalBelanja += hargaBarang;

  document.getElementById("totalBelanja").innerHTML =
    "Rp " + totalBelanja.toFixed(2);

  document.getElementById("detailBelanja").innerHTML += `
  <p>Kode Barang: ${kodeBarang}, Nama Barang: ${namaBarang}, Harga: Rp ${hargaBarang.toFixed(
    2
  )}</p>
`;

  var alertMessage = `Barang ditambahkan!\nKode Barang: ${kodeBarang}\nNama Barang: ${namaBarang}\nHarga: Rp ${hargaBarang.toFixed(
    2
  )}`;

  alert(alertMessage);
}
