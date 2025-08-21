import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import BottomNavigation from '../components/layout/BottomNavigation';
import WorkoutCard from '../components/ui/WorkoutCard';
import FloatingActionButton from '../components/ui/FloatingActionButton';
import { useQuery } from '@apollo/client';
import ErrorMessage from '../components/ui/ErrorMessage';
import { GET_FEED } from '../../database/graphql/query/feed';

function Feed({ onNavigateToNewPost, onNavigateToProfile, onLogout }) {
	const [activeItem, setActiveItem] = useState('feed');
	const [workouts, setWorkouts] = useState([]);
	const { loading, error, data } = useQuery(GET_FEED);

	useEffect(() => {
		const fetchWorkouts = async () => {
			const normalizedWorkouts = data.allFeeds.map((item) => {
				if (item.workout) {
					return {
						id: item.id,
						...item.workout,
					};
				}
				return item;
			});
			setWorkouts(normalizedWorkouts);
		};

		fetchWorkouts();
	}, [data]);

	const handleMenuClick = (itemId) => {
		setActiveItem(itemId);
		console.log('Menu clicked:', itemId);

		if (itemId === 'profile') {
			onNavigateToProfile?.();
		} else if (itemId === 'logout') {
			onLogout?.();
		}
	};

	console.log(error);

	return (
		<div className='min-h-screen bg-gray-50'>
			<Header />

			<div className='md:flex'>
				{/* Desktop Sidebar */}
				<Sidebar activeItem={activeItem} onItemClick={handleMenuClick} />

				{/* Main Content */}
				<main className='flex-1 p-4 md:p-6 pb-20 md:pb-6'>
					<div className='max-w-7xl mx-auto'>
						<h1 className='text-2xl font-bold text-brand-graphite mb-6 hidden md:block'>
							Feed de Treinos
						</h1>

						{/* Loading State */}
						{loading && (
							<div className='flex justify-center items-center py-8'>
								<div className='text-gray-500'>Carregando treinos...</div>
							</div>
						)}

						{/* Error State */}
						{error && <ErrorMessage message='Erro ao carregar treinos' error={error.message} />}

						{/* Workout Cards Grid */}
						{!loading && !error && (
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6'>
								{workouts.map((workout) => (
									<WorkoutCard key={workout.id} workout={workout} />
								))}
							</div>
						)}
					</div>
				</main>
			</div>

			{/* Mobile Bottom Navigation */}
			<BottomNavigation activeItem={activeItem} onItemClick={handleMenuClick} />

			{/* Floating Action Button */}
			<FloatingActionButton onClick={onNavigateToNewPost} />
		</div>
	);
}

export default Feed;
