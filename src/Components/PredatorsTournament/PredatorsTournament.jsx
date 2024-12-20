import { Helmet } from "react-helmet-async";

const PredatorsTournament = () => {
    return (
        <div style={{ width: '100%', height: '100%', border: 'none', paddingTop: '0px' }}>
            <Helmet>
                <title>Predators Tournament | Fc Predators</title>
            </Helmet>
            <iframe
                src='https://golprobd.blogspot.com/p/fc-predators-tournament.html'
                style={{
                    width: '100%', height: '100vh', border: 'none', borderRadius: '0px',  
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6)'
                }}
            />
        </div>
    );
};

export default PredatorsTournament;