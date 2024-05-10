import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          <div className='xl:w-[54%]'>
            <form className='flex flex-col gap-6 px-10 py-12 bg-[#27272C] rounded-xl'>
              <h3 className='text-4xl font-bold'>Let's work together</h3>
              <p className='text-white/60'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt sit illo esse commodi.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    <SelectItem value='cst'>UI/UX Design</SelectItem>
                    <SelectItem value='mst'>Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className='h-[200px]'
                placeholder='Type your message here.'
              />
              <Button size='md' className='max-w-40'>
                Send message
              </Button>
            </form>
          </div>
          <div className='flex-1'></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
