import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  // 注意：这里用 initialize 而不是 init，避免 ObjC init 冲突
  initialize(): Promise<string>;
}

export default TurboModuleRegistry.get<Spec>('NativeInitModule');
