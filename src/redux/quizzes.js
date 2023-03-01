import { createReduxModule } from 'hooks-for-redux';
import updateQuestion from './actions/updateQuestion';
import addQuestion from './actions/addQuestion';
import deleteQuestion from './actions/deleteQuestion';

// Data för frågorna:
// Data för quizzet:

// När man klickar på ett svarsalternativ:
// 1. Koll om det var rätt svar -> Öka score med 1.
// 2. Kolla om det var sista frågan, kolla om currentQuestion === questions.length -1 
// -> visa resultat.

// Redux funktioner (Actions) som behövs;
// 1. addQuestion
// 2. updateQuestion
// 3. deleteQuestion

// 4 Start quizz - quizzStarted = true, showResult = false, currentQuestion = 0, score = 0

// 5. Answer question
// Kolla om det är rätt svar, då öka score
// Kolla om det är sista frågan då ändra showResult = true
// Öka currentQuestion med 1.


const state = {
    quizzStarted: false,
    showResult: false,
    currentQuizz: 0,
    currentQuestion: 0,
    score: 0,
    quizzes: [
        {
            title: 'Math Quizz',
            questions: [
                {
                    title: 'What is 7 + 9?',
                    alt: ['16', '15', '19'],
                    correct: 0,
                    id: `q0q0-${Date.now()}`
                },
                {
                    title: 'What is 8 x 8?',
                    alt: ['56', '64', '82'],
                    correct: 1,
                    id: `q0q1-${Date.now()}`
                },
                {
                    title: 'What is 12 / 3?',
                    alt: ['6', '4', '8'],
                    correct: 1,
                    id: `q0q2-${Date.now()}`
                },
                {
                    title: 'What is 36 x 3?',
                    alt: ['99', '102', '108'],
                    correct: 2,
                    id: `q0q3-${Date.now()}`
                },
                {
                    title: 'What is 99 / 3?',
                    alt: ['30', '33', '36'],
                    correct: 1,
                    id: `q0q4-${Date.now()}`
                },
            ],
            id: `q0-${Date.now()}`
        }
    ]
}

export const [useQuizzes, { add, update, del }] = createReduxModule('quizzes', state, {
    add: addQuestion,
    update: updateQuestion,
    del: deleteQuestion
})

