import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useTodos = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        loading: false,
        error: null,
        addTodo: (title, id) =>
          set(() => {
            const newTodo = {
              id,
              title,
              completed: false,
            }

            return {
              todos: [...get().todos, newTodo],
            }
          }),

        toggleTodo: (id) => {
          set((state) => {
            return {
              todos: state.todos.map((i) =>
                i.id === id ? { ...i, completed: !i.completed } : i
              ),
            }
          })
        },
        fetchTodos: async () => {
          set({ loading: true })

          try {
            const res = await fetch(
              'https://jsonplaceholder.typicode.com/todos?_limit=10'
            )

            if (!res.ok) throw new Error('Failed to fetch! Try again.')

            set({ todos: await res.json(), error: null })
          } catch (error) {
            set({ error: error.message })
          } finally {
            set({ loading: false })
          }
        },
      }),
      {
        name: 'todo-storage',
      }
    )
  )
)

export const useFilters = create((set, get) => ({
  filter: 'all',
  setFilter: (filter) => set({ filter }),
}))
