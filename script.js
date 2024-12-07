const title = document.getElementById('title');
const startButton = document.getElementById('start-button');
const items = document.querySelector('.items');

startButton.addEventListener('click', () => {
  title.style.opacity = 0;
  startButton.style.opacity = 0;

  // Reset animation
  items.style.animation = 'none';

  // Trigger animation
  setTimeout(() => {
    items.style.animation = 'spin 0.1s ease-in-out infinite';
  }, 10);

  // Stop animation after 2 seconds
  setTimeout(() => {
    items.style.animation = 'none';

    // Randomly select A or B
    const result = Math.random() < 0.5 ? 'A' : 'B';

    // Adjust position to show the selected item
    const offset = result === 'A' ? 0 : -50; // "A" is at 0px, "B" is at -50px
    items.style.transform = `translateY(${offset}px)`;

    setTimeout(() => {
      alert(
        result === 'A' ? 'だからお前はすごいんだ' : 'だからお前はダメなんだ'
      );
      title.style.opacity = 100;
      startButton.style.opacity = 100;
    }, 300);
  }, 2000);
});
