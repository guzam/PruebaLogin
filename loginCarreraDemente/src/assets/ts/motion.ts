import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';


let accelHandler: PluginListenerHandle;

export async function motionActive() {
                                try {
                                    console.log("ingresando a motionActive()");
                                    await (DeviceMotionEvent as any).requestPermission() 
                                  } catch (e) {
                                    // Handle error
                                    return;
                                  }
                                
                                  // Once the user approves, can start listening:
                                  accelHandler = await Motion.addListener('accel', event => {
                                    console.log('Device motion event:', event);
                                  });
}

// Stop the acceleration listener
export const stopAcceleration = () => {
  if (accelHandler) {
    accelHandler.remove();
  }
};

// Remove all listeners
export const removeListeners = () => {
  Motion.removeAllListeners();
};