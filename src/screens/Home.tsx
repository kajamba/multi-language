import React from "react";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div>

            <p>{t('header')}</p>
        </div>
    )
}

export default Home;
