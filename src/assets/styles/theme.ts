import { colors } from 'assets/styles/colors';
import { constants } from 'assets/styles/constants';
import { mixins } from 'assets/styles/mixins';

const theme = {// tudo que vamos importar está qui
    colors,
    constants,
    mixins,
} as const;// essa parte á um apelido

export default theme;

// esse arquivo é como se fosse nosse container 