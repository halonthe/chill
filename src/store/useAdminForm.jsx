import { create } from "zustand";

const useAdminForm = create((set) => ({
  openForm: false,
  setOpenForm: (newOpenForm) => set({ openForm: newOpenForm }),
  openList: true,
  setOpenList: (newOpenList) => set({ openList: newOpenList }),
  openEdit: false,
  setOpenEdit: (newOpenEdit) => set({ openEdit: newOpenEdit }),
  editMovie: {},
  setEditMovie: (newEditMovie) => set({ editMovie: newEditMovie }),
}));

export default useAdminForm;
