import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux actions and selectors
import {
    getLocations,
    _selectLocations,
    _selectLocation,
    _selectLoading,
    _selectError,
} from '../../../redux/features/dashboadSlice';

export default function useLocations() {
    const dispatch = useDispatch();
    const locations = useSelector(_selectLocations);
    const location = useSelector(_selectLocation);
    const isLoading = useSelector(_selectLoading);
    const error = useSelector(_selectError);

    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);

    return { location, locations, isLoading, error };
}
