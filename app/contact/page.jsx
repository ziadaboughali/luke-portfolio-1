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
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          <div className='flex-1'>
            <form className='flex flex-col gap-6 px-10 py-12 bg-white/5 rounded-xl'>
              <div className='grid grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />
              </div>
              <Select>
                <SelectTrigger className='w-full text-primary'>
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
                className='h-[200px] text-primary'
                placeholder='Type your message here.'
              />
              <Button>Send message</Button>
              {/* <div className='flex flex-col lg:flex-row gap-[30px]'>
              </div>
              <div className='flex flex-col lg:flex-row gap-[30px]'>
              </div> */}
            </form>
          </div>
          <div className='flex-1'>2</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
