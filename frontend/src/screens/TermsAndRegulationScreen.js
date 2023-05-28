import React from 'react';
import { Link } from 'react-router-dom';
import { redirect } from '../../node_modules/react-router-dom/dist/index';


export default function TermsAndRegulationScreen(props) {
    return (
        <div className="terms-container">
            <h1>Terms and Regulations</h1>
            <div className="terms-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    gravida eleifend mi, sit amet consequat libero. Donec ullamcorper,
                    justo non vestibulum finibus, risus sem viverra ex, at aliquet massa
                    tellus at ex. Ut ultrices eros vitae ligula pellentesque ultrices.
                    Proin non consequat lacus. Phasellus auctor sem tellus, in tincidunt
                    mauris fringilla eget. Ut malesuada, turpis sed consequat auctor,
                    mauris enim venenatis urna, ac posuere lectus risus id nisi. Quisque
                    lobortis lacus a sem efficitur, eu dictum ex congue. Fusce molestie
                    lectus nunc, ut viverra velit iaculis sed. Nulla facilisi. Nulla vel
                    fermentum urna, nec consectetur lectus. Aliquam pretium ex nec
                    posuere lobortis. Vestibulum sagittis velit augue, id malesuada est
                    congue vitae. In porttitor, elit et venenatis ullamcorper, ligula
                    ligula scelerisque orci, nec dictum velit mauris in urna. Fusce vitae
                    maximus dolor. Curabitur lacinia metus turpis, a efficitur sem
                    faucibus vitae.
                </p>
                <p>
                    Vivamus sit amet eleifend nibh. Morbi sed ligula tellus. Etiam
                    pellentesque lacus in nisi dignissim, in vestibulum massa commodo.
                    Praesent sed purus et sapien hendrerit pharetra vel et ligula. Fusce
                    interdum tellus vitae ullamcorper iaculis. Phasellus lacinia justo
                    nec tellus malesuada, sed sagittis nisl pulvinar. Integer ultrices,
                    justo vitae dapibus luctus, nunc turpis pharetra ex, non finibus
                    justo neque ac lacus. Nunc convallis vestibulum ultrices. Fusce
                    vulputate tincidunt convallis. Curabitur auctor nisi felis, id
                    interdum nisi lobortis a. Proin aliquam faucibus turpis in faucibus.
                    Sed eleifend leo vitae malesuada molestie.
                </p>
                <p>
                    Proin efficitur enim non odio consectetur, ac dapibus purus
                    scelerisque. Integer eu risus hendrerit, feugiat enim vitae, semper
                    velit. Curabitur pharetra ultricies risus, id fringilla ligula
                    consequat sed. Nullam sed nisl eros. Phasellus non ex non dolor
                    posuere auctor. Nam fermentum, sem id aliquet dignissim, tortor sem
                    eleifend purus, sit amet semper odio est eget risus. Nulla a ex
                    feugiat, facilisis quam eget, aliquam urna. Vestibulum malesuada
                    malesuada elementum. Curabitur efficitur massa id tortor aliquet, eu
                    tristique sapien pharetra. Donec auctor ex sed enim convallis, eu
                    lacinia sapien rhoncus.
                </p>
            </div>
            <div>
                If you agree by the terms and regulation{' '}
                <Link to={`/register?redirect=${redirect}`}> You can create your account.</Link>
            </div>
        </div>
    );
}
