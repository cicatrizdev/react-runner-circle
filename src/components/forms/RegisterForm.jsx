import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

function RegisterForm({ onNavigateToLogin }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (field) => (e) => {
		setFormData((prev) => ({
			...prev,
			[field]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Register:', formData);
	};

	return (
		<Card className='w-full max-w-sm'>
			<h1 className='text-xl font-bold text-brand-graphite mb-2'>CRIAR CONTA</h1>
			<p className='text-sm text-brand-gray-light mb-4'>Crie sua conta para começar a correr!</p>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<Input
					label='Nome completo'
					type='text'
					placeholder='Seu nome completo'
					value={formData.name}
					onChange={handleChange('name')}
					required
				/>

				<Input
					label='Email'
					type='email'
					placeholder='usuario123@hotmail.com'
					value={formData.email}
					onChange={handleChange('email')}
					required
				/>

				<Input
					label='Senha'
					type='password'
					placeholder='••••••••'
					value={formData.password}
					onChange={handleChange('password')}
					required
				/>

				<Input
					label='Confirmar senha'
					type='password'
					placeholder='••••••••'
					value={formData.confirmPassword}
					onChange={handleChange('confirmPassword')}
					required
				/>

				<Button type='submit'>
					Criar conta
					<svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
					</svg>
				</Button>
			</form>

			<p className='mt-4 text-center text-xs text-brand-gray-light'>
				Já tem uma conta?{' '}
				<button
					onClick={onNavigateToLogin}
					className='text-brand-graphite font-semibold hover:underline'
				>
					Faça login! 🏃‍♂️
				</button>
			</p>
		</Card>
	);
}

export default RegisterForm;
