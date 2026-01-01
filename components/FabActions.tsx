import React from 'react';
import { FAB, Portal } from 'react-native-paper';

export type FabActionsProps = {
  open: boolean;
  onStateChange: (state: { open: boolean }) => void;
  onHeal: () => void;
  onCheerUp: () => void;
  onTrain: () => void;
  onPress: () => void;
};

export function FabActions({ open, onStateChange, onHeal, onCheerUp, onTrain, onPress }: FabActionsProps) {
  return (
    <Portal>
      <FAB.Group
        fabStyle={{ backgroundColor: '#2596be' }}
        rippleColor="rgba(94, 203, 246, 0.3)"
        color='#FFFFFF'
        backdropColor='rgba(0, 0, 0, 0.5)'
        open={open}
        visible
        icon={open ? 'close' : 'plus'}
        actions={[
          {
            icon: 'heart',
            label: 'Heal',
            onPress: onHeal,
            color: '#e74c3c',
            style: { backgroundColor: '#fdecea' },
          },
          {
            icon: 'emoticon-happy',
            label: 'Cheer Up',
            onPress: onCheerUp,
            color: '#f1c40f',
            style: { backgroundColor: '#fff9e5' },
          },
          {
            icon: 'run',
            label: 'Train',
            onPress: onTrain,
            color: '#27ae60',
            style: { backgroundColor: '#e9f7ef' },
          },
        ]}
        onStateChange={onStateChange}
        onPress={onPress}
      />
    </Portal>
  );
}
