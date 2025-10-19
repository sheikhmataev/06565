'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const formSchema = z.object({
  name: z.string().min(2, 'Navn må være minst 2 tegn.'),
  email: z.string().email('Ugyldig e-postadresse.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Meldingen må være minst 10 tegn.'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data submitted:', data);
    // Here you would typically send the data to your API endpoint
    // e.g., fetch('/api/contact/submit', { method: 'POST', body: JSON.stringify(data) });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Navn</label>
        <Input id="name" {...register('name')} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-post</label>
        <Input id="email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon (valgfritt)</label>
        <Input id="phone" {...register('phone')} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Melding</label>
        <textarea 
          id="message" 
          rows={5}
          className="w-full p-2 border rounded-md focus:ring-accent-1 focus:border-accent-1"
          {...register('message')}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="w-full">Send Melding</Button>
    </form>
  );
}
