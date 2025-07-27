function calculateInterest() {
  const p = parseFloat(document.getElementById("principal").value);
  const r = parseFloat(document.getElementById("rate").value);
  const t = parseFloat(document.getElementById("time").value);

  if (isNaN(p) || isNaN(r) || isNaN(t)) {
    document.getElementById("result").innerText = "Please enter valid values!";
    return;
  }

  const si = (p * r * t) / 100;
  document.getElementById("result").innerText = `Simple Interest: ₹${si.toFixed(
    2
  )}`;
}
