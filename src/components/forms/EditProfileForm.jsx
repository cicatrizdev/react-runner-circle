import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Textarea from '../ui/Textarea'

function EditProfileForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    nome: 'Ana Silva Correia',
    username: '@anasilva',
    email: 'ana.silva@email.com',
    telefone: '(11) 99999-9999',
    cidade: 'São Paulo',
    estado: 'SP',
    bio: 'Corredora apaixonada por novos desafios. Sempre em busca da próxima meta!'
  })

  const handleChange = (field) => (e) => {
    const value = e.target ? e.target.value : e
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-brand-graphite">Editar Perfil</h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Informações Pessoais */}
        <div className="space-y-4">
          <Input
            label="Nome completo"
            value={formData.nome}
            onChange={handleChange('nome')}
            placeholder="Seu nome completo"
          />

          <Input
            label="Nome de usuário"
            value={formData.username}
            onChange={handleChange('username')}
            placeholder="@seunome"
          />

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="seu@email.com"
          />

          <Input
            label="Telefone"
            value={formData.telefone}
            onChange={handleChange('telefone')}
            placeholder="(11) 99999-9999"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Cidade"
              value={formData.cidade}
              onChange={handleChange('cidade')}
              placeholder="Sua cidade"
            />
            <Input
              label="Estado"
              value={formData.estado}
              onChange={handleChange('estado')}
              placeholder="SP"
            />
          </div>

          <Textarea
            label="Bio"
            value={formData.bio}
            onChange={handleChange('bio')}
            placeholder="Conte um pouco sobre você..."
            rows={3}
          />
        </div>

        {/* Botões */}
        <div className="flex space-x-4 pt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-brand-green-lime text-brand-graphite hover:bg-brand-green-medium"
          >
            Salvar alterações
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditProfileForm