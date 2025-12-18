import CustomIcon from '../Icon/CustomIcon';
import { faPeopleGroup, faWallet, faPenToSquare, faBrain } from '@fortawesome/free-solid-svg-icons';

const Footer = () => 
{
    return (
        // eslint-disable-next-line max-len
        <footer className="fixed bottom-0 left-0 w-full text-[#F5F5F5] p-6 mobile:p-9 tablet:p-10 border border-[#2B496C] rounded-t-3xl bg-[#0B2541]">
            <div className="flex items-center flex-row  justify-around space-3 mobile:space-y-0">
                <CustomIcon icon={faBrain} color='#B4BECA' />
                <CustomIcon icon={faPenToSquare} color='#B4BECA' />
                <CustomIcon icon={faPeopleGroup} color='#B4BECA' />
                <CustomIcon icon={faWallet} color='#B4BECA' />
            </div>
        </footer>
    );
};
1
export default Footer;