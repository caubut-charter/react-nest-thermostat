declare module 'react-nest-thermostat' {
  import { FC } from 'react';

  type IThermostatPropTypes = {
    height?: string;
    width?: string;
    numTicks?: number;
    minValue?: number;
    maxValue?: number;
    away?: boolean;
    leaf?: boolean;
    ambientTemperature?: number;
    targetTemperature?: number;
    hvacMode?: 'cooling' | 'off' | 'heating';
  };

  const Thermostat: FC<IThermostatPropTypes>;

  export default Thermostat;
}
