import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../src/store/store';
import { setOpenMenu } from '../../src/store/openMenu/openMenuSlice';
import CustomIcon from '../Icon/CustomIcon';
import { faRankingStar, faMoneyBill, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const userAvatarImg = '/assets/images/file.png';
const gameIconImg = '/assets/icons/game1.png';

const Header = () => 
{
    const dispatch = useDispatch<AppDispatch>();
    const openMenu = useSelector((state: RootState) => state.menu.openMenu);

    return (
         
        <header className="w-full flex flex-row tablet:flex-row items-center py-4 tablet:py-6 bg-background mb-5 text-[#F5F5F5]">
            <div className="w-full tablet:w-9/12 flex tablet:flex-row p-2 tablet:p-5 items-center text-[#F5F5F5]">
                <div className="w-1/5 flex mb-2.5 tablet:mb-0 pl-20">
                    <img src={userAvatarImg} alt="User Avatar" className="w-8 h-8 rounded-full" />
                </div>
                <div className="w-full tablet:w-3/4 text-center tablet:text-left">
                    <div className="flex flex-row tablet:flex-row items-center flex-start tablet:justify-start">
                        <p className="text-sm font-lato mb-2.5 tablet:mb-0 text-[#F5F5F5]">Ivan Zagorac</p>
                        <p className="text-sm ml-0 tablet:ml-2.5 font-lato mb-2.5 tablet:mb-0 text-light-text">(BalkanTeam)</p>
                    </div>

                    <div className="flex flex-row tablet:flex-row w-full mt-2">
                        <div className="flex items-center flex-row justify-center mr-10">
                            <CustomIcon icon={faRankingStar} size='lg' color='#B4BECA' />
                            <span className="ml-1.5 text-sm font-lato text-light-text my-1 tablet:my-0">104.</span>
                        </div>
                        <div className="flex items-center flex-row justify-center mr-10">
                            <img src={gameIconImg} alt="Game Icon" className="w-4 h-4" />
                            <span className="ml-1.5 text-sm font-lato text-light-text my-1 tablet:my-0">1345</span>
                        </div>
                        <div className="flex items-center flex-row justify-center mr-10">
                            <CustomIcon icon={faMoneyBill} size='lg' color='#B4BECA' />
                            <span className="ml-1.5 text-sm font-lato text-light-text my-1 tablet:my-0">432.325$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mt-4 tablet:mt-0 pr-20">
                <button onClick={() => dispatch(setOpenMenu(!openMenu))} className="bg-transparent border-none cursor-pointer">
                    {openMenu ?
                        <CustomIcon icon={faXmark} size='xl' color='#B4BECA' /> :
                        <CustomIcon icon={faBars} size='xl' color='#B4BECA' />}
                </button>
            </div>
        </header>
    );
};

export default Header;