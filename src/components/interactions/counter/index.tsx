import { useSelector } from "react-redux";

import { decrease, increase } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";

export const Counter =()=> {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(decrease())}>
          -
        </button>
        <span className="mx-2">{count}</span>
        <button type="button" onClick={() => dispatch(increase())}>
          +
        </button>
      </div>
    </div>
  );
}
