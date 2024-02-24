import { create } from "zustand";

try {
    const user = JSON.parse(localStorage.getItem("user-info"));
    console.log("Parsed user-info data:", user);
} catch (error) {
    console.error("Error parsing user-info data:", error);
}

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user-info")),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }),
}));

export default useAuthStore;
