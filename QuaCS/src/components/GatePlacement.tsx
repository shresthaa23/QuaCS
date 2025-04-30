import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = { BOX: 'box' };

function DraggableBox() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.BOX,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const attachRef = useCallback((element) => {
    drag(element);
  }, [drag]);

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      Drag Me
    </div>
  );
}

function DropZone() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.BOX,
    drop: () => console.log('Dropped!'),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ background: isOver ? 'lightgreen' : 'white' }}>
      Drop Here
    </div>
  );
}

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DraggableBox />
      <DropZone />
    </DndProvider>
  );
}
