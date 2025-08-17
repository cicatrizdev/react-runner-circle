import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Card from '../ui/Card';

function LoginForm({ onNavigateToRegister, onNavigateToFeed }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Login:', { email, password, rememberMe });
		// Simular login bem-sucedido
		onNavigateToFeed?.();
	};

	return (
		<Card className='w-full max-w-xs'>
			<h1 className='text-xl font-bold text-brand-graphite mb-2'>LOGIN</h1>
			<p className='text-sm text-brand-gray-light mb-4'>Boas-vindas! Faça seu login.</p>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<Input
					label='Email'
					type='email'
					placeholder='usuario123@hotmail.com'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<Input
					label='Senha'
					type='password'
					placeholder='••••••'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<Checkbox
					label='Lembrar-me'
					checked={rememberMe}
					onChange={(e) => setRememberMe(e.target.checked)}
				/>

				<Button type='submit'>
					Login
					<svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
					</svg>
				</Button>
			</form>

			<p className='mt-4 text-center text-xs text-brand-gray-light'>
				Ainda não tem conta?{' '}
				<button
					onClick={onNavigateToRegister}
					className='text-brand-graphite font-semibold hover:underline'
				>
					Crie seu cadastro! 📱
				</button>
			</p>
		</Card>
	);
}

export default LoginForm;
