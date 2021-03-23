import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// types
import { Location } from '../../types';

// components
import { Loader } from '../global/Loader';
import { LocationCard, LocationModal } from './components';
import { DashboardWrapper } from './styled';

// redux actions and selectors
import {
    getLocations,
    setSelectedLocation,
    _selectLocations,
    _selectLocation,
    _selectLoading,
    _selectError,
} from '../../redux/features/dashboadSlice';

// helpers
import { isObjectEmpty } from '../../utils/helpers';

function Dashboard() {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const locations = useSelector(_selectLocations);
    const location = useSelector(_selectLocation);
    const isLoading = useSelector(_selectLoading);
    const error = useSelector(_selectError);

    useEffect(() => {
        dispatch(getLocations());
    }, [dispatch]);

    function openLocationModal(id: string | number) {
        setIsModalOpen(true);
        dispatch(setSelectedLocation(id));
    }

    function closeLocationModal() {
        setIsModalOpen(false);
    }

    if (error) {
        return <p>Something went wrong... Try again later</p>;
    }

    return (
        <DashboardWrapper>
            {isLoading && <Loader />}
            {!isObjectEmpty(locations)
                ? Object.keys(locations).map((key: string) => {
                      const loc = locations[key] as Location;
                      return (
                          <LocationCard
                              key={loc.id}
                              id={loc.id}
                              name={loc.name}
                              createdAt={loc.createdAt}
                              userCount={loc.userCount}
                              views={loc.views}
                              onCardClick={openLocationModal}
                          />
                      );
                  })
                : null}
            <LocationModal isOpen={isModalOpen} location={location} onClose={closeLocationModal} />
        </DashboardWrapper>
    );
}

export default Dashboard;
