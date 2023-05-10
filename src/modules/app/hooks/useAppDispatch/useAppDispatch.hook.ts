import { useDispatch } from "react-redux";

import { AppDispatch } from "~/app/store/app/app.types";

export const useAppDispatch: () => AppDispatch = useDispatch;
