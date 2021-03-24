import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// types
import { Location } from '../../types';

// components
import { Loader } from '../global/Loader';
import { LocationCard, LocationModal } from './components';
import { DashboardWrapper } from './styled';

// redux actions and selectors
import { setSelectedLocation } from '../../redux/features/dashboadSlice';

// helpers
import { isObjectEmpty } from '../../utils/helpers';

// hooks
import { useLocations } from './hooks';

function Dashboard() {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { location, locations, isLoading, error } = useLocations();

    function openLocationModal(id: string | number) {
        setIsModalOpen(true);
        dispatch(setSelectedLocation(id));
    }

    function closeLocationModal() {
        setIsModalOpen(false);
    }

    if (error) {
        return (
            <DashboardWrapper>
                <p>Something went wrong... Try again later</p>
            </DashboardWrapper>
        );
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
