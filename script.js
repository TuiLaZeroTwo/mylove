const startDate = new Date('October 22, 2024 00:00:00').getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(distance % 1000);

  // Sử dụng GSAP để animate
  gsap.to('#days', { duration: 0.5, text: days, ease: "power2.out" });
  gsap.to('#hours', { duration: 0.5, text: hours, ease: "power2.out" });
  gsap.to('#minutes', { duration: 0.5, text: minutes, ease: "power2.out" });
  gsap.to('#seconds', { duration: 0.5, text: seconds, ease: "power2.out" });
  gsap.to('#milliseconds', { duration: 0.5, text: milliseconds, ease: "power2.out" });
}

// Gọi hàm updateTimer() định kỳ
setInterval(updateTimer, 1000);
