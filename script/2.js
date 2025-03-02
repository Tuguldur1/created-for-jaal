const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const imageDisplay = document.querySelector('.image-display'); // New image container

// Array of questions with corresponding answers and image paths
const questions = [
    { text: "Төгөлдөр т хайртай юу?", answer: "Мэдсиймаа💕", image: "img/plsssss.webp" },
    { text: "Цаачин чамд хайртай гэж боджийну?", answer: "Мэдээж", image: "img/yeaaaah.webp" },
    { text: "Дахиж цаадханда уурлахгүй гэсэн баталгаа өгхүү?", answer: "Hehe", image: "img/plsssss.webp" },
    { text: "Төгөлдөр хөөрхөн тиймээ?", answer: "Баярлаа😘", image: "img/yeaaaah.webp" },
    { text: "Энэ Website ийг story д хуу?", answer: "Заа яахсымдээ золиг минь🙂‍↔️", image: "img/plsssss.webp" },
    { text: "Хайрыга санасан үедээ ишээ орж байгаарай за", answer: "❤️", image: "img/yeaaaah.webp" },
    { text: "Гялс очих болхоор хүлээж байгаарай да жаалаа", answer: "Гялзнаа", image: "img/plsssss.webp" },
    { text: "Залхцну энэ асуултуудаас 😁", answer: "За За буцах дээр дар2", image: "img/yeaaaah.webp" }
    
];
let currentQuestionIndex = 0;

// Capture the initial position of the "No" button
const initialNoBtnPosition = {
    left: noBtn.style.left,
    top: noBtn.style.top,
};

// Function to display the current question
function showQuestion() {
    question.innerHTML = questions[currentQuestionIndex].text;
    // Keep displaying the last image shown until 'Yes' is clicked
}

// Event listener for "Yes" button click
yesBtn.addEventListener('click', () => {
    // Display the answer and update the corresponding image for the current question
    question.innerHTML = questions[currentQuestionIndex].answer;
    imageDisplay.src = questions[currentQuestionIndex].image; // Update the image with the answer

    setTimeout(() => {
        // Move to the next question after 2 seconds
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        showQuestion(); // Show the next question text without changing the image

        // Reset "No" button to its initial position
        noBtn.style.left = initialNoBtnPosition.left;
        noBtn.style.top = initialNoBtnPosition.top;
    }, 2000); // 2000 milliseconds = 2 seconds
});

// Event listener for "No" button hover
noBtn.addEventListener('mouseover', () => {
    // Recalculate bounding rectangles to account for the latest position
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Random x and y positions within wrapper bounds
    const x = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const y = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

    // Set the position of the "No" button
    noBtn.style.position = 'absolute'; // Ensure it can move within the wrapper
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Initial display of the first question
showQuestion();
