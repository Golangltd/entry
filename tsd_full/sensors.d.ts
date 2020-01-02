/// <reference path="core.d.ts" />
declare namespace sensors {
	interface QAccelerometer_ITF extends QSensor_ITF {
		QAccelerometer_PTR():QAccelerometer;
	}

	class QAccelerometer extends QSensor {
		___pointer: number;
		QAccelerometer_PTR():QAccelerometer;
		Pointer():number;
		SetPointer(p:number):void;
		AccelerationMode():number;
		ConnectAccelerationModeChanged(f:(accelerationMode:number)=>void):void;
		DisconnectAccelerationModeChanged():void;
		AccelerationModeChanged(accelerationMode:number):void;
		Reading():QAccelerometerReading;
		SetAccelerationMode(accelerationMode:number):void;
		ConnectDestroyQAccelerometer(f:()=>void):void;
		DisconnectDestroyQAccelerometer():void;
		DestroyQAccelerometer():void;
		DestroyQAccelerometerDefault():void;
	}
	function NewQAccelerometerFromPointer(ptr:number):QAccelerometer;
	function NewQAccelerometer(parent:core.QObject_ITF):QAccelerometer;
	const QAccelerometer__Combined: number;
	const QAccelerometer__Gravity: number;
	const QAccelerometer__User: number;
	interface QAccelerometerFilter_ITF extends QSensorFilter_ITF {
		QAccelerometerFilter_PTR():QAccelerometerFilter;
	}

	class QAccelerometerFilter extends QSensorFilter {
		___pointer: number;
		QAccelerometerFilter_PTR():QAccelerometerFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAccelerometerFilter():void;
		ConnectFilter(f:(reading:QAccelerometerReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QAccelerometerReading_ITF):boolean;
	}
	function NewQAccelerometerFilterFromPointer(ptr:number):QAccelerometerFilter;
	interface QAccelerometerReading_ITF extends QSensorReading_ITF {
		QAccelerometerReading_PTR():QAccelerometerReading;
	}

	class QAccelerometerReading extends QSensorReading {
		___pointer: number;
		QAccelerometerReading_PTR():QAccelerometerReading;
		Pointer():number;
		SetPointer(p:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		SetZ(z:number):void;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQAccelerometerReadingFromPointer(ptr:number):QAccelerometerReading;
	interface QAltimeter_ITF extends QSensor_ITF {
		QAltimeter_PTR():QAltimeter;
	}

	class QAltimeter extends QSensor {
		___pointer: number;
		QAltimeter_PTR():QAltimeter;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QAltimeterReading;
		ConnectDestroyQAltimeter(f:()=>void):void;
		DisconnectDestroyQAltimeter():void;
		DestroyQAltimeter():void;
		DestroyQAltimeterDefault():void;
	}
	function NewQAltimeterFromPointer(ptr:number):QAltimeter;
	function NewQAltimeter(parent:core.QObject_ITF):QAltimeter;
	interface QAltimeterFilter_ITF extends QSensorFilter_ITF {
		QAltimeterFilter_PTR():QAltimeterFilter;
	}

	class QAltimeterFilter extends QSensorFilter {
		___pointer: number;
		QAltimeterFilter_PTR():QAltimeterFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAltimeterFilter():void;
		ConnectFilter(f:(reading:QAltimeterReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QAltimeterReading_ITF):boolean;
	}
	function NewQAltimeterFilterFromPointer(ptr:number):QAltimeterFilter;
	interface QAltimeterReading_ITF extends QSensorReading_ITF {
		QAltimeterReading_PTR():QAltimeterReading;
	}

	class QAltimeterReading extends QSensorReading {
		___pointer: number;
		QAltimeterReading_PTR():QAltimeterReading;
		Pointer():number;
		SetPointer(p:number):void;
		Altitude():number;
		SetAltitude(altitude:number):void;
	}
	function NewQAltimeterReadingFromPointer(ptr:number):QAltimeterReading;
	interface QAmbientLightFilter_ITF extends QSensorFilter_ITF {
		QAmbientLightFilter_PTR():QAmbientLightFilter;
	}

	class QAmbientLightFilter extends QSensorFilter {
		___pointer: number;
		QAmbientLightFilter_PTR():QAmbientLightFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAmbientLightFilter():void;
		ConnectFilter(f:(reading:QAmbientLightReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QAmbientLightReading_ITF):boolean;
	}
	function NewQAmbientLightFilterFromPointer(ptr:number):QAmbientLightFilter;
	interface QAmbientLightReading_ITF extends QSensorReading_ITF {
		QAmbientLightReading_PTR():QAmbientLightReading;
	}

	class QAmbientLightReading extends QSensorReading {
		___pointer: number;
		QAmbientLightReading_PTR():QAmbientLightReading;
		Pointer():number;
		SetPointer(p:number):void;
		LightLevel():number;
		SetLightLevel(lightLevel:number):void;
	}
	function NewQAmbientLightReadingFromPointer(ptr:number):QAmbientLightReading;
	const QAmbientLightReading__Undefined: number;
	const QAmbientLightReading__Dark: number;
	const QAmbientLightReading__Twilight: number;
	const QAmbientLightReading__Light: number;
	const QAmbientLightReading__Bright: number;
	const QAmbientLightReading__Sunny: number;
	interface QAmbientLightSensor_ITF extends QSensor_ITF {
		QAmbientLightSensor_PTR():QAmbientLightSensor;
	}

	class QAmbientLightSensor extends QSensor {
		___pointer: number;
		QAmbientLightSensor_PTR():QAmbientLightSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QAmbientLightReading;
		ConnectDestroyQAmbientLightSensor(f:()=>void):void;
		DisconnectDestroyQAmbientLightSensor():void;
		DestroyQAmbientLightSensor():void;
		DestroyQAmbientLightSensorDefault():void;
	}
	function NewQAmbientLightSensorFromPointer(ptr:number):QAmbientLightSensor;
	function NewQAmbientLightSensor(parent:core.QObject_ITF):QAmbientLightSensor;
	interface QAmbientTemperatureFilter_ITF extends QSensorFilter_ITF {
		QAmbientTemperatureFilter_PTR():QAmbientTemperatureFilter;
	}

	class QAmbientTemperatureFilter extends QSensorFilter {
		___pointer: number;
		QAmbientTemperatureFilter_PTR():QAmbientTemperatureFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQAmbientTemperatureFilter():void;
		ConnectFilter(f:(reading:QAmbientTemperatureReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QAmbientTemperatureReading_ITF):boolean;
	}
	function NewQAmbientTemperatureFilterFromPointer(ptr:number):QAmbientTemperatureFilter;
	interface QAmbientTemperatureReading_ITF extends QSensorReading_ITF {
		QAmbientTemperatureReading_PTR():QAmbientTemperatureReading;
	}

	class QAmbientTemperatureReading extends QSensorReading {
		___pointer: number;
		QAmbientTemperatureReading_PTR():QAmbientTemperatureReading;
		Pointer():number;
		SetPointer(p:number):void;
		SetTemperature(temperature:number):void;
		Temperature():number;
	}
	function NewQAmbientTemperatureReadingFromPointer(ptr:number):QAmbientTemperatureReading;
	interface QAmbientTemperatureSensor_ITF extends QSensor_ITF {
		QAmbientTemperatureSensor_PTR():QAmbientTemperatureSensor;
	}

	class QAmbientTemperatureSensor extends QSensor {
		___pointer: number;
		QAmbientTemperatureSensor_PTR():QAmbientTemperatureSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QAmbientTemperatureReading;
		ConnectDestroyQAmbientTemperatureSensor(f:()=>void):void;
		DisconnectDestroyQAmbientTemperatureSensor():void;
		DestroyQAmbientTemperatureSensor():void;
		DestroyQAmbientTemperatureSensorDefault():void;
	}
	function NewQAmbientTemperatureSensorFromPointer(ptr:number):QAmbientTemperatureSensor;
	function NewQAmbientTemperatureSensor(parent:core.QObject_ITF):QAmbientTemperatureSensor;
	interface QCompass_ITF extends QSensor_ITF {
		QCompass_PTR():QCompass;
	}

	class QCompass extends QSensor {
		___pointer: number;
		QCompass_PTR():QCompass;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QCompassReading;
		ConnectDestroyQCompass(f:()=>void):void;
		DisconnectDestroyQCompass():void;
		DestroyQCompass():void;
		DestroyQCompassDefault():void;
	}
	function NewQCompassFromPointer(ptr:number):QCompass;
	function NewQCompass(parent:core.QObject_ITF):QCompass;
	interface QCompassFilter_ITF extends QSensorFilter_ITF {
		QCompassFilter_PTR():QCompassFilter;
	}

	class QCompassFilter extends QSensorFilter {
		___pointer: number;
		QCompassFilter_PTR():QCompassFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQCompassFilter():void;
		ConnectFilter(f:(reading:QCompassReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QCompassReading_ITF):boolean;
	}
	function NewQCompassFilterFromPointer(ptr:number):QCompassFilter;
	interface QCompassReading_ITF extends QSensorReading_ITF {
		QCompassReading_PTR():QCompassReading;
	}

	class QCompassReading extends QSensorReading {
		___pointer: number;
		QCompassReading_PTR():QCompassReading;
		Pointer():number;
		SetPointer(p:number):void;
		Azimuth():number;
		CalibrationLevel():number;
		SetAzimuth(azimuth:number):void;
		SetCalibrationLevel(calibrationLevel:number):void;
	}
	function NewQCompassReadingFromPointer(ptr:number):QCompassReading;
	interface QDistanceFilter_ITF extends QSensorFilter_ITF {
		QDistanceFilter_PTR():QDistanceFilter;
	}

	class QDistanceFilter extends QSensorFilter {
		___pointer: number;
		QDistanceFilter_PTR():QDistanceFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQDistanceFilter():void;
		ConnectFilter(f:(reading:QDistanceReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QDistanceReading_ITF):boolean;
	}
	function NewQDistanceFilterFromPointer(ptr:number):QDistanceFilter;
	interface QDistanceReading_ITF extends QSensorReading_ITF {
		QDistanceReading_PTR():QDistanceReading;
	}

	class QDistanceReading extends QSensorReading {
		___pointer: number;
		QDistanceReading_PTR():QDistanceReading;
		Pointer():number;
		SetPointer(p:number):void;
		Distance():number;
		SetDistance(distance:number):void;
	}
	function NewQDistanceReadingFromPointer(ptr:number):QDistanceReading;
	interface QDistanceSensor_ITF extends QSensor_ITF {
		QDistanceSensor_PTR():QDistanceSensor;
	}

	class QDistanceSensor extends QSensor {
		___pointer: number;
		QDistanceSensor_PTR():QDistanceSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QDistanceReading;
		ConnectDestroyQDistanceSensor(f:()=>void):void;
		DisconnectDestroyQDistanceSensor():void;
		DestroyQDistanceSensor():void;
		DestroyQDistanceSensorDefault():void;
	}
	function NewQDistanceSensorFromPointer(ptr:number):QDistanceSensor;
	function NewQDistanceSensor(parent:core.QObject_ITF):QDistanceSensor;
	interface QGyroscope_ITF extends QSensor_ITF {
		QGyroscope_PTR():QGyroscope;
	}

	class QGyroscope extends QSensor {
		___pointer: number;
		QGyroscope_PTR():QGyroscope;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QGyroscopeReading;
		ConnectDestroyQGyroscope(f:()=>void):void;
		DisconnectDestroyQGyroscope():void;
		DestroyQGyroscope():void;
		DestroyQGyroscopeDefault():void;
	}
	function NewQGyroscopeFromPointer(ptr:number):QGyroscope;
	function NewQGyroscope(parent:core.QObject_ITF):QGyroscope;
	interface QGyroscopeFilter_ITF extends QSensorFilter_ITF {
		QGyroscopeFilter_PTR():QGyroscopeFilter;
	}

	class QGyroscopeFilter extends QSensorFilter {
		___pointer: number;
		QGyroscopeFilter_PTR():QGyroscopeFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQGyroscopeFilter():void;
		ConnectFilter(f:(reading:QGyroscopeReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QGyroscopeReading_ITF):boolean;
	}
	function NewQGyroscopeFilterFromPointer(ptr:number):QGyroscopeFilter;
	interface QGyroscopeReading_ITF extends QSensorReading_ITF {
		QGyroscopeReading_PTR():QGyroscopeReading;
	}

	class QGyroscopeReading extends QSensorReading {
		___pointer: number;
		QGyroscopeReading_PTR():QGyroscopeReading;
		Pointer():number;
		SetPointer(p:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		SetZ(z:number):void;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQGyroscopeReadingFromPointer(ptr:number):QGyroscopeReading;
	interface QHolsterFilter_ITF extends QSensorFilter_ITF {
		QHolsterFilter_PTR():QHolsterFilter;
	}

	class QHolsterFilter extends QSensorFilter {
		___pointer: number;
		QHolsterFilter_PTR():QHolsterFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHolsterFilter():void;
		ConnectFilter(f:(reading:QHolsterReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QHolsterReading_ITF):boolean;
	}
	function NewQHolsterFilterFromPointer(ptr:number):QHolsterFilter;
	interface QHolsterReading_ITF extends QSensorReading_ITF {
		QHolsterReading_PTR():QHolsterReading;
	}

	class QHolsterReading extends QSensorReading {
		___pointer: number;
		QHolsterReading_PTR():QHolsterReading;
		Pointer():number;
		SetPointer(p:number):void;
		Holstered():boolean;
		SetHolstered(holstered:boolean):void;
	}
	function NewQHolsterReadingFromPointer(ptr:number):QHolsterReading;
	interface QHolsterSensor_ITF extends QSensor_ITF {
		QHolsterSensor_PTR():QHolsterSensor;
	}

	class QHolsterSensor extends QSensor {
		___pointer: number;
		QHolsterSensor_PTR():QHolsterSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QHolsterReading;
		ConnectDestroyQHolsterSensor(f:()=>void):void;
		DisconnectDestroyQHolsterSensor():void;
		DestroyQHolsterSensor():void;
		DestroyQHolsterSensorDefault():void;
	}
	function NewQHolsterSensorFromPointer(ptr:number):QHolsterSensor;
	function NewQHolsterSensor(parent:core.QObject_ITF):QHolsterSensor;
	interface QHumidityFilter_ITF extends QSensorFilter_ITF {
		QHumidityFilter_PTR():QHumidityFilter;
	}

	class QHumidityFilter extends QSensorFilter {
		___pointer: number;
		QHumidityFilter_PTR():QHumidityFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQHumidityFilter():void;
		ConnectFilter(f:(reading:QHumidityReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QHumidityReading_ITF):boolean;
	}
	function NewQHumidityFilterFromPointer(ptr:number):QHumidityFilter;
	interface QHumidityReading_ITF extends QSensorReading_ITF {
		QHumidityReading_PTR():QHumidityReading;
	}

	class QHumidityReading extends QSensorReading {
		___pointer: number;
		QHumidityReading_PTR():QHumidityReading;
		Pointer():number;
		SetPointer(p:number):void;
		AbsoluteHumidity():number;
		RelativeHumidity():number;
		SetAbsoluteHumidity(value:number):void;
		SetRelativeHumidity(humidity:number):void;
	}
	function NewQHumidityReadingFromPointer(ptr:number):QHumidityReading;
	interface QHumiditySensor_ITF extends QSensor_ITF {
		QHumiditySensor_PTR():QHumiditySensor;
	}

	class QHumiditySensor extends QSensor {
		___pointer: number;
		QHumiditySensor_PTR():QHumiditySensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QHumidityReading;
		ConnectDestroyQHumiditySensor(f:()=>void):void;
		DisconnectDestroyQHumiditySensor():void;
		DestroyQHumiditySensor():void;
		DestroyQHumiditySensorDefault():void;
	}
	function NewQHumiditySensorFromPointer(ptr:number):QHumiditySensor;
	function NewQHumiditySensor(parent:core.QObject_ITF):QHumiditySensor;
	interface QIRProximityFilter_ITF extends QSensorFilter_ITF {
		QIRProximityFilter_PTR():QIRProximityFilter;
	}

	class QIRProximityFilter extends QSensorFilter {
		___pointer: number;
		QIRProximityFilter_PTR():QIRProximityFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQIRProximityFilter():void;
		ConnectFilter(f:(reading:QIRProximityReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QIRProximityReading_ITF):boolean;
	}
	function NewQIRProximityFilterFromPointer(ptr:number):QIRProximityFilter;
	interface QIRProximityReading_ITF extends QSensorReading_ITF {
		QIRProximityReading_PTR():QIRProximityReading;
	}

	class QIRProximityReading extends QSensorReading {
		___pointer: number;
		QIRProximityReading_PTR():QIRProximityReading;
		Pointer():number;
		SetPointer(p:number):void;
		Reflectance():number;
		SetReflectance(reflectance:number):void;
	}
	function NewQIRProximityReadingFromPointer(ptr:number):QIRProximityReading;
	interface QIRProximitySensor_ITF extends QSensor_ITF {
		QIRProximitySensor_PTR():QIRProximitySensor;
	}

	class QIRProximitySensor extends QSensor {
		___pointer: number;
		QIRProximitySensor_PTR():QIRProximitySensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QIRProximityReading;
		ConnectDestroyQIRProximitySensor(f:()=>void):void;
		DisconnectDestroyQIRProximitySensor():void;
		DestroyQIRProximitySensor():void;
		DestroyQIRProximitySensorDefault():void;
	}
	function NewQIRProximitySensorFromPointer(ptr:number):QIRProximitySensor;
	function NewQIRProximitySensor(parent:core.QObject_ITF):QIRProximitySensor;
	interface QLidFilter_ITF extends QSensorFilter_ITF {
		QLidFilter_PTR():QLidFilter;
	}

	class QLidFilter extends QSensorFilter {
		___pointer: number;
		QLidFilter_PTR():QLidFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLidFilter():void;
		ConnectFilter(f:(reading:QLidReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QLidReading_ITF):boolean;
	}
	function NewQLidFilterFromPointer(ptr:number):QLidFilter;
	interface QLidReading_ITF extends QSensorReading_ITF {
		QLidReading_PTR():QLidReading;
	}

	class QLidReading extends QSensorReading {
		___pointer: number;
		QLidReading_PTR():QLidReading;
		Pointer():number;
		SetPointer(p:number):void;
		BackLidClosed():boolean;
		FrontLidClosed():boolean;
		SetBackLidClosed(closed:boolean):void;
		SetFrontLidClosed(closed:boolean):void;
	}
	function NewQLidReadingFromPointer(ptr:number):QLidReading;
	interface QLidSensor_ITF extends QSensor_ITF {
		QLidSensor_PTR():QLidSensor;
	}

	class QLidSensor extends QSensor {
		___pointer: number;
		QLidSensor_PTR():QLidSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QLidReading;
		ConnectDestroyQLidSensor(f:()=>void):void;
		DisconnectDestroyQLidSensor():void;
		DestroyQLidSensor():void;
		DestroyQLidSensorDefault():void;
	}
	function NewQLidSensorFromPointer(ptr:number):QLidSensor;
	function NewQLidSensor(parent:core.QObject_ITF):QLidSensor;
	interface QLightFilter_ITF extends QSensorFilter_ITF {
		QLightFilter_PTR():QLightFilter;
	}

	class QLightFilter extends QSensorFilter {
		___pointer: number;
		QLightFilter_PTR():QLightFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQLightFilter():void;
		ConnectFilter(f:(reading:QLightReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QLightReading_ITF):boolean;
	}
	function NewQLightFilterFromPointer(ptr:number):QLightFilter;
	interface QLightReading_ITF extends QSensorReading_ITF {
		QLightReading_PTR():QLightReading;
	}

	class QLightReading extends QSensorReading {
		___pointer: number;
		QLightReading_PTR():QLightReading;
		Pointer():number;
		SetPointer(p:number):void;
		Lux():number;
		SetLux(lux:number):void;
	}
	function NewQLightReadingFromPointer(ptr:number):QLightReading;
	interface QLightSensor_ITF extends QSensor_ITF {
		QLightSensor_PTR():QLightSensor;
	}

	class QLightSensor extends QSensor {
		___pointer: number;
		QLightSensor_PTR():QLightSensor;
		Pointer():number;
		SetPointer(p:number):void;
		FieldOfView():number;
		ConnectFieldOfViewChanged(f:(fieldOfView:number)=>void):void;
		DisconnectFieldOfViewChanged():void;
		FieldOfViewChanged(fieldOfView:number):void;
		Reading():QLightReading;
		SetFieldOfView(fieldOfView:number):void;
		ConnectDestroyQLightSensor(f:()=>void):void;
		DisconnectDestroyQLightSensor():void;
		DestroyQLightSensor():void;
		DestroyQLightSensorDefault():void;
	}
	function NewQLightSensorFromPointer(ptr:number):QLightSensor;
	function NewQLightSensor(parent:core.QObject_ITF):QLightSensor;
	interface QMagnetometer_ITF extends QSensor_ITF {
		QMagnetometer_PTR():QMagnetometer;
	}

	class QMagnetometer extends QSensor {
		___pointer: number;
		QMagnetometer_PTR():QMagnetometer;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QMagnetometerReading;
		ReturnGeoValues():boolean;
		ConnectReturnGeoValuesChanged(f:(returnGeoValues:boolean)=>void):void;
		DisconnectReturnGeoValuesChanged():void;
		ReturnGeoValuesChanged(returnGeoValues:boolean):void;
		SetReturnGeoValues(returnGeoValues:boolean):void;
		ConnectDestroyQMagnetometer(f:()=>void):void;
		DisconnectDestroyQMagnetometer():void;
		DestroyQMagnetometer():void;
		DestroyQMagnetometerDefault():void;
	}
	function NewQMagnetometerFromPointer(ptr:number):QMagnetometer;
	function NewQMagnetometer(parent:core.QObject_ITF):QMagnetometer;
	interface QMagnetometerFilter_ITF extends QSensorFilter_ITF {
		QMagnetometerFilter_PTR():QMagnetometerFilter;
	}

	class QMagnetometerFilter extends QSensorFilter {
		___pointer: number;
		QMagnetometerFilter_PTR():QMagnetometerFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQMagnetometerFilter():void;
		ConnectFilter(f:(reading:QMagnetometerReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QMagnetometerReading_ITF):boolean;
	}
	function NewQMagnetometerFilterFromPointer(ptr:number):QMagnetometerFilter;
	interface QMagnetometerReading_ITF extends QSensorReading_ITF {
		QMagnetometerReading_PTR():QMagnetometerReading;
	}

	class QMagnetometerReading extends QSensorReading {
		___pointer: number;
		QMagnetometerReading_PTR():QMagnetometerReading;
		Pointer():number;
		SetPointer(p:number):void;
		CalibrationLevel():number;
		SetCalibrationLevel(calibrationLevel:number):void;
		SetX(x:number):void;
		SetY(y:number):void;
		SetZ(z:number):void;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQMagnetometerReadingFromPointer(ptr:number):QMagnetometerReading;
	interface QOrientationFilter_ITF extends QSensorFilter_ITF {
		QOrientationFilter_PTR():QOrientationFilter;
	}

	class QOrientationFilter extends QSensorFilter {
		___pointer: number;
		QOrientationFilter_PTR():QOrientationFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQOrientationFilter():void;
		ConnectFilter(f:(reading:QOrientationReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QOrientationReading_ITF):boolean;
	}
	function NewQOrientationFilterFromPointer(ptr:number):QOrientationFilter;
	interface QOrientationReading_ITF extends QSensorReading_ITF {
		QOrientationReading_PTR():QOrientationReading;
	}

	class QOrientationReading extends QSensorReading {
		___pointer: number;
		QOrientationReading_PTR():QOrientationReading;
		Pointer():number;
		SetPointer(p:number):void;
		Orientation():number;
		SetOrientation(orientation:number):void;
	}
	function NewQOrientationReadingFromPointer(ptr:number):QOrientationReading;
	const QOrientationReading__Undefined: number;
	const QOrientationReading__TopUp: number;
	const QOrientationReading__TopDown: number;
	const QOrientationReading__LeftUp: number;
	const QOrientationReading__RightUp: number;
	const QOrientationReading__FaceUp: number;
	const QOrientationReading__FaceDown: number;
	interface QOrientationSensor_ITF extends QSensor_ITF {
		QOrientationSensor_PTR():QOrientationSensor;
	}

	class QOrientationSensor extends QSensor {
		___pointer: number;
		QOrientationSensor_PTR():QOrientationSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QOrientationReading;
		ConnectDestroyQOrientationSensor(f:()=>void):void;
		DisconnectDestroyQOrientationSensor():void;
		DestroyQOrientationSensor():void;
		DestroyQOrientationSensorDefault():void;
	}
	function NewQOrientationSensorFromPointer(ptr:number):QOrientationSensor;
	function NewQOrientationSensor(parent:core.QObject_ITF):QOrientationSensor;
	interface QPressureFilter_ITF extends QSensorFilter_ITF {
		QPressureFilter_PTR():QPressureFilter;
	}

	class QPressureFilter extends QSensorFilter {
		___pointer: number;
		QPressureFilter_PTR():QPressureFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQPressureFilter():void;
		ConnectFilter(f:(reading:QPressureReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QPressureReading_ITF):boolean;
	}
	function NewQPressureFilterFromPointer(ptr:number):QPressureFilter;
	interface QPressureReading_ITF extends QSensorReading_ITF {
		QPressureReading_PTR():QPressureReading;
	}

	class QPressureReading extends QSensorReading {
		___pointer: number;
		QPressureReading_PTR():QPressureReading;
		Pointer():number;
		SetPointer(p:number):void;
		Pressure():number;
		SetPressure(pressure:number):void;
		SetTemperature(temperature:number):void;
		Temperature():number;
	}
	function NewQPressureReadingFromPointer(ptr:number):QPressureReading;
	interface QPressureSensor_ITF extends QSensor_ITF {
		QPressureSensor_PTR():QPressureSensor;
	}

	class QPressureSensor extends QSensor {
		___pointer: number;
		QPressureSensor_PTR():QPressureSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QPressureReading;
		ConnectDestroyQPressureSensor(f:()=>void):void;
		DisconnectDestroyQPressureSensor():void;
		DestroyQPressureSensor():void;
		DestroyQPressureSensorDefault():void;
	}
	function NewQPressureSensorFromPointer(ptr:number):QPressureSensor;
	function NewQPressureSensor(parent:core.QObject_ITF):QPressureSensor;
	interface QProximityFilter_ITF extends QSensorFilter_ITF {
		QProximityFilter_PTR():QProximityFilter;
	}

	class QProximityFilter extends QSensorFilter {
		___pointer: number;
		QProximityFilter_PTR():QProximityFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQProximityFilter():void;
		ConnectFilter(f:(reading:QProximityReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QProximityReading_ITF):boolean;
	}
	function NewQProximityFilterFromPointer(ptr:number):QProximityFilter;
	interface QProximityReading_ITF extends QSensorReading_ITF {
		QProximityReading_PTR():QProximityReading;
	}

	class QProximityReading extends QSensorReading {
		___pointer: number;
		QProximityReading_PTR():QProximityReading;
		Pointer():number;
		SetPointer(p:number):void;
		Close():boolean;
		SetClose(close:boolean):void;
	}
	function NewQProximityReadingFromPointer(ptr:number):QProximityReading;
	interface QProximitySensor_ITF extends QSensor_ITF {
		QProximitySensor_PTR():QProximitySensor;
	}

	class QProximitySensor extends QSensor {
		___pointer: number;
		QProximitySensor_PTR():QProximitySensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QProximityReading;
		ConnectDestroyQProximitySensor(f:()=>void):void;
		DisconnectDestroyQProximitySensor():void;
		DestroyQProximitySensor():void;
		DestroyQProximitySensorDefault():void;
	}
	function NewQProximitySensorFromPointer(ptr:number):QProximitySensor;
	function NewQProximitySensor(parent:core.QObject_ITF):QProximitySensor;
	interface QRotationFilter_ITF extends QSensorFilter_ITF {
		QRotationFilter_PTR():QRotationFilter;
	}

	class QRotationFilter extends QSensorFilter {
		___pointer: number;
		QRotationFilter_PTR():QRotationFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQRotationFilter():void;
		ConnectFilter(f:(reading:QRotationReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QRotationReading_ITF):boolean;
	}
	function NewQRotationFilterFromPointer(ptr:number):QRotationFilter;
	interface QRotationReading_ITF extends QSensorReading_ITF {
		QRotationReading_PTR():QRotationReading;
	}

	class QRotationReading extends QSensorReading {
		___pointer: number;
		QRotationReading_PTR():QRotationReading;
		Pointer():number;
		SetPointer(p:number):void;
		SetFromEuler(x:number,y:number,z:number):void;
		X():number;
		Y():number;
		Z():number;
	}
	function NewQRotationReadingFromPointer(ptr:number):QRotationReading;
	interface QRotationSensor_ITF extends QSensor_ITF {
		QRotationSensor_PTR():QRotationSensor;
	}

	class QRotationSensor extends QSensor {
		___pointer: number;
		QRotationSensor_PTR():QRotationSensor;
		Pointer():number;
		SetPointer(p:number):void;
		HasZ():boolean;
		ConnectHasZChanged(f:(hasZ:boolean)=>void):void;
		DisconnectHasZChanged():void;
		HasZChanged(hasZ:boolean):void;
		Reading():QRotationReading;
		SetHasZ(hasZ:boolean):void;
		ConnectDestroyQRotationSensor(f:()=>void):void;
		DisconnectDestroyQRotationSensor():void;
		DestroyQRotationSensor():void;
		DestroyQRotationSensorDefault():void;
	}
	function NewQRotationSensorFromPointer(ptr:number):QRotationSensor;
	function NewQRotationSensor(parent:core.QObject_ITF):QRotationSensor;
	interface QSensor_ITF extends core.QObject_ITF {
		QSensor_PTR():QSensor;
	}

	class QSensor extends core.QObject {
		___pointer: number;
		QSensor_PTR():QSensor;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectActiveChanged(f:()=>void):void;
		DisconnectActiveChanged():void;
		ActiveChanged():void;
		AddFilter(filter:QSensorFilter_ITF):void;
		ConnectAlwaysOnChanged(f:()=>void):void;
		DisconnectAlwaysOnChanged():void;
		AlwaysOnChanged():void;
		ConnectAvailableSensorsChanged(f:()=>void):void;
		DisconnectAvailableSensorsChanged():void;
		AvailableSensorsChanged():void;
		AxesOrientationMode():number;
		ConnectAxesOrientationModeChanged(f:(axesOrientationMode:number)=>void):void;
		DisconnectAxesOrientationModeChanged():void;
		AxesOrientationModeChanged(axesOrientationMode:number):void;
		BufferSize():number;
		ConnectBufferSizeChanged(f:(bufferSize:number)=>void):void;
		DisconnectBufferSizeChanged():void;
		BufferSizeChanged(bufferSize:number):void;
		ConnectBusyChanged(f:()=>void):void;
		DisconnectBusyChanged():void;
		BusyChanged():void;
		ConnectToBackend():boolean;
		CurrentOrientation():number;
		ConnectCurrentOrientationChanged(f:(currentOrientation:number)=>void):void;
		DisconnectCurrentOrientationChanged():void;
		CurrentOrientationChanged(currentOrientation:number):void;
		DataRate():number;
		ConnectDataRateChanged(f:()=>void):void;
		DisconnectDataRateChanged():void;
		DataRateChanged():void;
		DefaultSensorForType(ty:core.QByteArray_ITF):core.QByteArray;
		Description():string;
		EfficientBufferSize():number;
		ConnectEfficientBufferSizeChanged(f:(efficientBufferSize:number)=>void):void;
		DisconnectEfficientBufferSizeChanged():void;
		EfficientBufferSizeChanged(efficientBufferSize:number):void;
		Error():number;
		Filters():QSensorFilter[];
		Identifier():core.QByteArray;
		IsActive():boolean;
		IsAlwaysOn():boolean;
		IsBusy():boolean;
		IsConnectedToBackend():boolean;
		IsFeatureSupported(feature:number):boolean;
		MaxBufferSize():number;
		ConnectMaxBufferSizeChanged(f:(maxBufferSize:number)=>void):void;
		DisconnectMaxBufferSizeChanged():void;
		MaxBufferSizeChanged(maxBufferSize:number):void;
		OutputRange():number;
		Reading():QSensorReading;
		ConnectReadingChanged(f:()=>void):void;
		DisconnectReadingChanged():void;
		ReadingChanged():void;
		RemoveFilter(filter:QSensorFilter_ITF):void;
		ConnectSensorError(f:(error:number)=>void):void;
		DisconnectSensorError():void;
		SensorError(error:number):void;
		SensorTypes():core.QByteArray[];
		SensorsForType(ty:core.QByteArray_ITF):core.QByteArray[];
		SetActive(active:boolean):void;
		SetAlwaysOn(alwaysOn:boolean):void;
		SetAxesOrientationMode(axesOrientationMode:number):void;
		SetBufferSize(bufferSize:number):void;
		SetCurrentOrientation(currentOrientation:number):void;
		SetDataRate(rate:number):void;
		SetEfficientBufferSize(efficientBufferSize:number):void;
		SetIdentifier(identifier:core.QByteArray_ITF):void;
		SetMaxBufferSize(maxBufferSize:number):void;
		SetOutputRange(index:number):void;
		SetSkipDuplicates(skipDuplicates:boolean):void;
		SetUserOrientation(userOrientation:number):void;
		SkipDuplicates():boolean;
		ConnectSkipDuplicatesChanged(f:(skipDuplicates:boolean)=>void):void;
		DisconnectSkipDuplicatesChanged():void;
		SkipDuplicatesChanged(skipDuplicates:boolean):void;
		ConnectStart(f:()=>boolean):void;
		DisconnectStart():void;
		Start():boolean;
		StartDefault():boolean;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		StopDefault():void;
		Type():core.QByteArray;
		UserOrientation():number;
		ConnectUserOrientationChanged(f:(userOrientation:number)=>void):void;
		DisconnectUserOrientationChanged():void;
		UserOrientationChanged(userOrientation:number):void;
		ConnectDestroyQSensor(f:()=>void):void;
		DisconnectDestroyQSensor():void;
		DestroyQSensor():void;
		DestroyQSensorDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSensorFromPointer(ptr:number):QSensor;
	function NewQSensor(ty:core.QByteArray_ITF,parent:core.QObject_ITF):QSensor;
	function QSensor_DefaultSensorForType(ty:core.QByteArray_ITF):core.QByteArray;
	function QSensor_SensorTypes():core.QByteArray[];
	function QSensor_SensorsForType(ty:core.QByteArray_ITF):core.QByteArray[];
	function NewQSensorGesture(ids:string[],parent:core.QObject_ITF):QSensorGesture;
	function NewQSensorGestureManager(parent:core.QObject_ITF):QSensorGestureManager;
	function NewQSensorGesturePluginInterface():QSensorGesturePluginInterface;
	function NewQSensorGestureRecognizer(parent:core.QObject_ITF):QSensorGestureRecognizer;
	const QSensor__Buffering: number;
	const QSensor__AlwaysOn: number;
	const QSensor__GeoValues: number;
	const QSensor__FieldOfView: number;
	const QSensor__AccelerationMode: number;
	const QSensor__SkipDuplicates: number;
	const QSensor__AxesOrientation: number;
	const QSensor__PressureSensorTemperature: number;
	const QSensor__Reserved: number;
	const QSensor__FixedOrientation: number;
	const QSensor__AutomaticOrientation: number;
	const QSensor__UserOrientation: number;
	interface QSensorBackend_ITF extends core.QObject_ITF {
		QSensorBackend_PTR():QSensorBackend;
	}

	class QSensorBackend extends core.QObject {
		___pointer: number;
		QSensorBackend_PTR():QSensorBackend;
		Pointer():number;
		SetPointer(p:number):void;
		AddDataRate(mi:number,max:number):void;
		AddOutputRange(mi:number,max:number,accuracy:number):void;
		ConnectIsFeatureSupported(f:(feature:number)=>boolean):void;
		DisconnectIsFeatureSupported():void;
		IsFeatureSupported(feature:number):boolean;
		IsFeatureSupportedDefault(feature:number):boolean;
		NewReadingAvailable():void;
		Reading():QSensorReading;
		Sensor():QSensor;
		SensorBusy():void;
		SensorError(error:number):void;
		SensorStopped():void;
		SetDataRates(otherSensor:QSensor_ITF):void;
		SetDescription(description:string):void;
		ConnectStart(f:()=>void):void;
		DisconnectStart():void;
		Start():void;
		ConnectStop(f:()=>void):void;
		DisconnectStop():void;
		Stop():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSensorBackendFromPointer(ptr:number):QSensorBackend;
	interface QSensorBackendFactory_ITF {
		QSensorBackendFactory_PTR():QSensorBackendFactory;
	}

	class QSensorBackendFactory {
		___pointer: number;
		QSensorBackendFactory_PTR():QSensorBackendFactory;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSensorBackendFactory():void;
		ConnectCreateBackend(f:(sensor:QSensor)=>QSensorBackend):void;
		DisconnectCreateBackend():void;
		CreateBackend(sensor:QSensor_ITF):QSensorBackend;
	}
	function NewQSensorBackendFactoryFromPointer(ptr:number):QSensorBackendFactory;
	interface QSensorChangesInterface_ITF {
		QSensorChangesInterface_PTR():QSensorChangesInterface;
	}

	class QSensorChangesInterface {
		___pointer: number;
		QSensorChangesInterface_PTR():QSensorChangesInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSensorChangesInterface():void;
		ConnectSensorsChanged(f:()=>void):void;
		DisconnectSensorsChanged():void;
		SensorsChanged():void;
	}
	function NewQSensorChangesInterfaceFromPointer(ptr:number):QSensorChangesInterface;
	interface QSensorFilter_ITF {
		QSensorFilter_PTR():QSensorFilter;
	}

	class QSensorFilter {
		___pointer: number;
		QSensorFilter_PTR():QSensorFilter;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectFilter(f:(reading:QSensorReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QSensorReading_ITF):boolean;
		ConnectDestroyQSensorFilter(f:()=>void):void;
		DisconnectDestroyQSensorFilter():void;
		DestroyQSensorFilter():void;
		DestroyQSensorFilterDefault():void;
	}
	function NewQSensorFilterFromPointer(ptr:number):QSensorFilter;
	interface QSensorGesture_ITF extends core.QObject_ITF {
		QSensorGesture_PTR():QSensorGesture;
	}

	class QSensorGesture extends core.QObject {
		___pointer: number;
		QSensorGesture_PTR():QSensorGesture;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectDetected(f:(vqs:string)=>void):void;
		DisconnectDetected():void;
		Detected(vqs:string):void;
		GestureSignals():string[];
		InvalidIds():string[];
		IsActive():boolean;
		StartDetection():void;
		StopDetection():void;
		ValidIds():string[];
		ConnectDestroyQSensorGesture(f:()=>void):void;
		DisconnectDestroyQSensorGesture():void;
		DestroyQSensorGesture():void;
		DestroyQSensorGestureDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSensorGestureFromPointer(ptr:number):QSensorGesture;
	function NewQSensorGesture(ids:string[],parent:core.QObject_ITF):QSensorGesture;
	function NewQSensorGestureManager(parent:core.QObject_ITF):QSensorGestureManager;
	function NewQSensorGesturePluginInterface():QSensorGesturePluginInterface;
	function NewQSensorGestureRecognizer(parent:core.QObject_ITF):QSensorGestureRecognizer;
	interface QSensorGestureManager_ITF extends core.QObject_ITF {
		QSensorGestureManager_PTR():QSensorGestureManager;
	}

	class QSensorGestureManager extends core.QObject {
		___pointer: number;
		QSensorGestureManager_PTR():QSensorGestureManager;
		Pointer():number;
		SetPointer(p:number):void;
		GestureIds():string[];
		ConnectNewSensorGestureAvailable(f:()=>void):void;
		DisconnectNewSensorGestureAvailable():void;
		NewSensorGestureAvailable():void;
		RecognizerSignals(gestureId:string):string[];
		RegisterSensorGestureRecognizer(recognizer:QSensorGestureRecognizer_ITF):boolean;
		SensorGestureRecognizer(id:string):QSensorGestureRecognizer;
		ConnectDestroyQSensorGestureManager(f:()=>void):void;
		DisconnectDestroyQSensorGestureManager():void;
		DestroyQSensorGestureManager():void;
		DestroyQSensorGestureManagerDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSensorGestureManagerFromPointer(ptr:number):QSensorGestureManager;
	function NewQSensorGestureManager(parent:core.QObject_ITF):QSensorGestureManager;
	function QSensorGestureManager_SensorGestureRecognizer(id:string):QSensorGestureRecognizer;
	interface QSensorGesturePluginInterface_ITF {
		QSensorGesturePluginInterface_PTR():QSensorGesturePluginInterface;
	}

	class QSensorGesturePluginInterface {
		___pointer: number;
		QSensorGesturePluginInterface_PTR():QSensorGesturePluginInterface;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreateRecognizers(f:()=>QSensorGestureRecognizer[]):void;
		DisconnectCreateRecognizers():void;
		CreateRecognizers():QSensorGestureRecognizer[];
		ConnectName(f:()=>string):void;
		DisconnectName():void;
		Name():string;
		ConnectSupportedIds(f:()=>string[]):void;
		DisconnectSupportedIds():void;
		SupportedIds():string[];
		ConnectDestroyQSensorGesturePluginInterface(f:()=>void):void;
		DisconnectDestroyQSensorGesturePluginInterface():void;
		DestroyQSensorGesturePluginInterface():void;
		DestroyQSensorGesturePluginInterfaceDefault():void;
	}
	function NewQSensorGesturePluginInterfaceFromPointer(ptr:number):QSensorGesturePluginInterface;
	function NewQSensorGesturePluginInterface():QSensorGesturePluginInterface;
	interface QSensorGestureRecognizer_ITF extends core.QObject_ITF {
		QSensorGestureRecognizer_PTR():QSensorGestureRecognizer;
	}

	class QSensorGestureRecognizer extends core.QObject {
		___pointer: number;
		QSensorGestureRecognizer_PTR():QSensorGestureRecognizer;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectCreate(f:()=>void):void;
		DisconnectCreate():void;
		Create():void;
		CreateBackend():void;
		ConnectDetected(f:(vqs:string)=>void):void;
		DisconnectDetected():void;
		Detected(vqs:string):void;
		GestureSignals():string[];
		ConnectId(f:()=>string):void;
		DisconnectId():void;
		Id():string;
		ConnectIsActive(f:()=>boolean):void;
		DisconnectIsActive():void;
		IsActive():boolean;
		ConnectStart(f:()=>boolean):void;
		DisconnectStart():void;
		Start():boolean;
		StartBackend():void;
		ConnectStop(f:()=>boolean):void;
		DisconnectStop():void;
		Stop():boolean;
		StopBackend():void;
		ConnectDestroyQSensorGestureRecognizer(f:()=>void):void;
		DisconnectDestroyQSensorGestureRecognizer():void;
		DestroyQSensorGestureRecognizer():void;
		DestroyQSensorGestureRecognizerDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSensorGestureRecognizerFromPointer(ptr:number):QSensorGestureRecognizer;
	function NewQSensorGestureRecognizer(parent:core.QObject_ITF):QSensorGestureRecognizer;
	interface QSensorManager_ITF {
		QSensorManager_PTR():QSensorManager;
	}

	class QSensorManager {
		___pointer: number;
		QSensorManager_PTR():QSensorManager;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSensorManager():void;
		CreateBackend(sensor:QSensor_ITF):QSensorBackend;
		IsBackendRegistered(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF):boolean;
		RegisterBackend(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF,factory:QSensorBackendFactory_ITF):void;
		SetDefaultBackend(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF):void;
		UnregisterBackend(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF):void;
	}
	function NewQSensorManagerFromPointer(ptr:number):QSensorManager;
	function QSensorManager_CreateBackend(sensor:QSensor_ITF):QSensorBackend;
	function QSensorManager_IsBackendRegistered(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF):boolean;
	function QSensorManager_RegisterBackend(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF,factory:QSensorBackendFactory_ITF):void;
	function QSensorManager_SetDefaultBackend(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF):void;
	function QSensorManager_UnregisterBackend(ty:core.QByteArray_ITF,identifier:core.QByteArray_ITF):void;
	interface QSensorPluginInterface_ITF {
		QSensorPluginInterface_PTR():QSensorPluginInterface;
	}

	class QSensorPluginInterface {
		___pointer: number;
		QSensorPluginInterface_PTR():QSensorPluginInterface;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQSensorPluginInterface():void;
		ConnectRegisterSensors(f:()=>void):void;
		DisconnectRegisterSensors():void;
		RegisterSensors():void;
	}
	function NewQSensorPluginInterfaceFromPointer(ptr:number):QSensorPluginInterface;
	interface QSensorReading_ITF extends core.QObject_ITF {
		QSensorReading_PTR():QSensorReading;
	}

	class QSensorReading extends core.QObject {
		___pointer: number;
		QSensorReading_PTR():QSensorReading;
		Pointer():number;
		SetPointer(p:number):void;
		SetTimestamp(timestamp:number):void;
		Timestamp():number;
		Value(index:number):core.QVariant;
		ValueCount():number;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQSensorReadingFromPointer(ptr:number):QSensorReading;
	interface QTapFilter_ITF extends QSensorFilter_ITF {
		QTapFilter_PTR():QTapFilter;
	}

	class QTapFilter extends QSensorFilter {
		___pointer: number;
		QTapFilter_PTR():QTapFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTapFilter():void;
		ConnectFilter(f:(reading:QTapReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QTapReading_ITF):boolean;
	}
	function NewQTapFilterFromPointer(ptr:number):QTapFilter;
	interface QTapReading_ITF extends QSensorReading_ITF {
		QTapReading_PTR():QTapReading;
	}

	class QTapReading extends QSensorReading {
		___pointer: number;
		QTapReading_PTR():QTapReading;
		Pointer():number;
		SetPointer(p:number):void;
		IsDoubleTap():boolean;
		SetDoubleTap(doubleTap:boolean):void;
		SetTapDirection(tapDirection:number):void;
		TapDirection():number;
	}
	function NewQTapReadingFromPointer(ptr:number):QTapReading;
	const QTapReading__Undefined: number;
	const QTapReading__X: number;
	const QTapReading__Y: number;
	const QTapReading__Z: number;
	const QTapReading__X_Pos: number;
	const QTapReading__Y_Pos: number;
	const QTapReading__Z_Pos: number;
	const QTapReading__X_Neg: number;
	const QTapReading__Y_Neg: number;
	const QTapReading__Z_Neg: number;
	const QTapReading__X_Both: number;
	const QTapReading__Y_Both: number;
	const QTapReading__Z_Both: number;
	interface QTapSensor_ITF extends QSensor_ITF {
		QTapSensor_PTR():QTapSensor;
	}

	class QTapSensor extends QSensor {
		___pointer: number;
		QTapSensor_PTR():QTapSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Reading():QTapReading;
		ReturnDoubleTapEvents():boolean;
		ConnectReturnDoubleTapEventsChanged(f:(returnDoubleTapEvents:boolean)=>void):void;
		DisconnectReturnDoubleTapEventsChanged():void;
		ReturnDoubleTapEventsChanged(returnDoubleTapEvents:boolean):void;
		SetReturnDoubleTapEvents(returnDoubleTapEvents:boolean):void;
		ConnectDestroyQTapSensor(f:()=>void):void;
		DisconnectDestroyQTapSensor():void;
		DestroyQTapSensor():void;
		DestroyQTapSensorDefault():void;
	}
	function NewQTapSensorFromPointer(ptr:number):QTapSensor;
	function NewQTapSensor(parent:core.QObject_ITF):QTapSensor;
	interface QTiltFilter_ITF extends QSensorFilter_ITF {
		QTiltFilter_PTR():QTiltFilter;
	}

	class QTiltFilter extends QSensorFilter {
		___pointer: number;
		QTiltFilter_PTR():QTiltFilter;
		Pointer():number;
		SetPointer(p:number):void;
		DestroyQTiltFilter():void;
		ConnectFilter(f:(reading:QTiltReading)=>boolean):void;
		DisconnectFilter():void;
		Filter(reading:QTiltReading_ITF):boolean;
	}
	function NewQTiltFilterFromPointer(ptr:number):QTiltFilter;
	interface QTiltReading_ITF extends QSensorReading_ITF {
		QTiltReading_PTR():QTiltReading;
	}

	class QTiltReading extends QSensorReading {
		___pointer: number;
		QTiltReading_PTR():QTiltReading;
		Pointer():number;
		SetPointer(p:number):void;
		SetXRotation(x:number):void;
		SetYRotation(y:number):void;
		XRotation():number;
		YRotation():number;
	}
	function NewQTiltReadingFromPointer(ptr:number):QTiltReading;
	interface QTiltSensor_ITF extends QSensor_ITF {
		QTiltSensor_PTR():QTiltSensor;
	}

	class QTiltSensor extends QSensor {
		___pointer: number;
		QTiltSensor_PTR():QTiltSensor;
		Pointer():number;
		SetPointer(p:number):void;
		Calibrate():void;
		Reading():QTiltReading;
		ConnectDestroyQTiltSensor(f:()=>void):void;
		DisconnectDestroyQTiltSensor():void;
		DestroyQTiltSensor():void;
		DestroyQTiltSensorDefault():void;
	}
	function NewQTiltSensorFromPointer(ptr:number):QTiltSensor;
	function NewQTiltSensor(parent:core.QObject_ITF):QTiltSensor;
}