const ratingButtons = document.querySelectorAll ('.rating button')
const submitBtn = document.querySelector ('.submit-btn')
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingText = document.getElementById('selected-rating');

let selectedRating = null;

ratingButtons.forEach (button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn =>btn.classList.remove ('active'));
        button.classList.add ('active');
        selectedRating = button.textContent;
    });
});

submitBtn.addEventListener ('click', () => {
    if (selectedRating) {
        selectedRatingText.textContent = selectedRating;
        ratingState.classList.add ('hidden');
        thankYouState.classList.remove('hidden');
    } else {
        alert('Please select a rating before submitting');
    }
});