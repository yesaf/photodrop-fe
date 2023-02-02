import { ModalContainer, AddPhoneInput, PhonesContainer } from './UploadModal.styles';
import PhoneInput from '../../../../shared/phoneInput/PhoneInput';
import closeIcon from '../../../../../assets/images/close-square.svg';
import UploadDashboard from '../uploadDashboard/UploadDashboard';
import { useEffect, useMemo, useState } from 'react';
import PhoneField from '../phoneField/PhoneField';
import 'react-phone-input-2/lib/style.css';

interface IUploadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const phoneRegex = /(0|91)?[6-9][0-9]{9}/;

function UploadModal({ isOpen, onClose }: IUploadModalProps) {
    const [phonesList, setPhonesList] = useState<string[]>([]);
    const [phone, setPhone] = useState('');



    const isPhoneValid = useMemo(() => {
        return phoneRegex.test(phone);
    }, [phone]);

    const handleAddPhoneNumber = () => {
        if (phoneRegex.test(phone)) {
            setPhonesList([...phonesList, phone]);
            setPhone('');
        }
    };

    const handleDeletePhoneNumber = (phone: string) => {
        setPhonesList(phonesList.filter(p => p !== phone));
    };

    const phonesElements = useMemo(() => phonesList.map((phone, index) =>
        <PhoneField
            key={index}
            phone={phone}
            onDelete={handleDeletePhoneNumber}/>,
    ), [phonesList]);

    return (
        <ModalContainer isModalOpen={isOpen}>
            <PhonesContainer>
                <header>
                    <span>Phone Numbers:</span>
                    <button
                        className="close-button"
                        onClick={onClose}>
                        <img src={closeIcon} alt=""/>
                    </button>
                </header>


                <AddPhoneInput>
                    <div>
                        <PhoneInput
                            country={'ua'}
                            value={phone}
                            onChange={(value) => setPhone(value)}
                        />
                    </div>
                    <button className="add-phone-button"
                            disabled={!isPhoneValid}
                            onClick={handleAddPhoneNumber}>
                        {
                            isPhoneValid ?
                                'Add Phone' :
                                'Invalid phone'
                        }
                    </button>

                </AddPhoneInput>

                <div className="phone-numbers">
                    {phonesElements}
                </div>
            </PhonesContainer>
            <UploadDashboard
                showDashboard={phonesList.length > 0}
                phonesList={phonesList}
            />
        </ModalContainer>
    );
}

export default UploadModal;
