import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { ContainerFooter } from "./styled";

export function Footer() {
    return (
        <ContainerFooter>
            <p>
              <FontAwesomeIcon icon={faCopyright} /> 2023 AtomNet | Todos os direitos reservados
            </p>
        </ContainerFooter>
    )
}