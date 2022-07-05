const options = {
    method: 'GET',
    headers: {
		"X-RapidAPI-Key": "72909027admsh408f2fa2b4c700fp162140jsn722905fa6e31",
		"X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com"
    }
  };

const urlSpec = 'https://motorcycle-specs-database.p.rapidapi.com/article/' + document.getElementById('yearIn').value + '/' + document.getElementById('marca').value + '/' + document.getElementById('modelo').value

async function getData(){
    const response = await fetch(urlSpec, options);
    const data = await response.json();

    const make = data.articleCompleteInfo.makeName;
    const model = data.articleCompleteInfo.modelName;
    const category = data.articleCompleteInfo.categoryName;
    const year = data.articleCompleteInfo.yearName;

    const displacement = data.engineAndTransmission.displacementName;
    const engineDetails = data.engineAndTransmission.engineDetailsName;
    const compression = data.engineAndTransmission.compressionName;
    const boreXStroke = data.engineAndTransmission.boreXStrokeName;
    const fuelSystem = data.engineAndTransmission.fuelSystemName;
    const ignition = data.engineAndTransmission.ignitionName;
    const coolingSystem = data.engineAndTransmission.coolingSystemName;
    const gearbox = data.engineAndTransmission.gearboxName;
    const transmissionTypeFinalDrive = data.engineAndTransmission.transmissionTypeFinalDriveName;
    const driveline = data.engineAndTransmission.drivelineName;

    const frameType = data.chassisSuspensionBrakesAndWheels.frameTypeName;
    const frontBrakes = data.chassisSuspensionBrakesAndWheels.frontBrakesName;
    const frontBrakesDiameter = data.chassisSuspensionBrakesAndWheels.frontBrakesDiameterName;
    const frontSuspension = data.chassisSuspensionBrakesAndWheels.frontSuspensionName;
    const frontTyre = data.chassisSuspensionBrakesAndWheels.frontTyreName;
    const rake = data.chassisSuspensionBrakesAndWheels.rakeName;
    const rearBrakes = data.chassisSuspensionBrakesAndWheels.rearBrakesName;
    const rearBrakesDiameter = data.chassisSuspensionBrakesAndWheels.rearBrakesDiameterName;
    const rearSuspension = data.chassisSuspensionBrakesAndWheels.rearSuspensionName;
    const rearTyre = data.chassisSuspensionBrakesAndWheels.rearTyreName;
    const trail = data.chassisSuspensionBrakesAndWheels.trailName;

    const fuelCapacity = data.physicalMeasuresAndCapacities.fuelCapacityName;
    const overallHeight = data.physicalMeasuresAndCapacities.overallHeightName;
    const overallLength = data.physicalMeasuresAndCapacities.overallLengthName;
    const overallWidth = data.physicalMeasuresAndCapacities.overallWidthName;
    const seatHeight = data.physicalMeasuresAndCapacities.seatHeightName;
    const weightInclOilGasEtcN = data.physicalMeasuresAndCapacities.weightInclOilGasEtcName;

    const colorOptions = data.otherSpecifications.colorOptionsName;
    const factoryWarrantyName = data.otherSpecifications.factoryWarrantyName;
    const starter = data.otherSpecifications.starterName;

    document.getElementById('make').textContent = make;
    document.getElementById('model').textContent = model;
    document.getElementById('category').textContent = category;
    document.getElementById('year').textContent = year;

    document.getElementById('displacement').textContent = displacement;
    document.getElementById('engineDetails').textContent = engineDetails;
    document.getElementById('compression').textContent = compression;
    document.getElementById('boreXStroke').textContent = boreXStroke;
    document.getElementById('fuelSystem').textContent = fuelSystem;
    document.getElementById('ignition').textContent = ignition;
    document.getElementById('coolingSystem').textContent = coolingSystem;
    document.getElementById('gearbox').textContent = gearbox;
    document.getElementById('transmissionTypeFinalDrive').textContent = transmissionTypeFinalDrive;
    document.getElementById('driveline').textContent = driveline;

    document.getElementById('frameType').textContent = frameType;
    document.getElementById('frontBrakes').textContent = frontBrakes;
    document.getElementById('frontBrakesDiameter').textContent = frontBrakesDiameter;
    document.getElementById('frontSuspension').textContent = frontSuspension;
    document.getElementById('frontTyre').textContent = frontTyre;
    document.getElementById('rake').textContent = rake;
    document.getElementById('rearBrakes').textContent = rearBrakes;
    document.getElementById('rearBrakesDiameter').textContent = rearBrakesDiameter;
    document.getElementById('rearSuspension').textContent = rearSuspension;
    document.getElementById('rearTyre').textContent = rearTyre;
    document.getElementById('trail').textContent = trail;

    document.getElementById('fuelCapacity').textContent = fuelCapacity;
    document.getElementById('overallHeight').textContent = overallHeight;
    document.getElementById('overallLength').textContent = overallLength;
    document.getElementById('overallWidth').textContent = overallWidth;
    document.getElementById('seatHeight').textContent = seatHeight;
    document.getElementById('weightInclOilGasEtcN').textContent = weightInclOilGasEtcN;

    document.getElementById('colorOptions').textContent = colorOptions;
    document.getElementById('factoryWarrantyName').textContent = factoryWarrantyName;
    document.getElementById('starter').textContent = starter;
}

let buttonSpecs = document.getElementById("buttonSpecs");
buttonSpecs.addEventListener('click', getData);