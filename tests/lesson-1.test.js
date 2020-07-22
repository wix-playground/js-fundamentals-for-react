const { toggleDone, updateTask } = require("../src/lesson-2/immutability");

describe('equality questions', () => {
    it('returns the correct state without mutating the initial state', () => {
        const taskId = 'someId'
        const task = 'Do something else'
        const state = {
            [taskId] : {
                isDone: false,
                task: 'Do something'
            },
        }
        const expectedState = {
            ...state,
            [taskId] : {
                ...state[taskId],
                task,
            }
        }
        expect(updateTask(state, taskId, task)).not.toBe(state);
        expect(updateTask(state, taskId, task)).toEqual(expectedState);
    })
    it('returns the correct state without mutating the initial state', () => {
        const taskId = 'someId'
        const state = {
            [taskId] : {
                isDone: false,
                task: 'Do something'
            },
            'someId2': {
                isDone: true,
                task: 'Do something2'
            }
        }
        const expectedState = {
            ...state,
            [taskId] : {
                ...state[taskId],
                isDone: !state[taskId].isDone,
            }
        }
        expect(toggleDone(state, taskId)).not.toBe(state);
        expect(toggleDone(state, taskId)).toEqual(expectedState);
    })
});