import React from 'react'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    return (
        <div>
            <SimpleCard title="Nuevos usuarios">
                <small className="text-muted">Este mes</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Usuarios registrados (102)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Pacientes (40)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={52}
                    color="primary"
                    text="Terapeutas (8)"
                />

                <div className="py-3" />
                <small className="text-muted">Mes pasado</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={65}
                    color="primary"
                    text="Usuarios registrados (88)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={37}
                    color="secondary"
                    text="Pacientes (32)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Terapeutas (10)"
                />

                <div className="py-3" />
                <small className="text-muted">Antepasado</small>
                <div className="pt-2" />
                <MatxProgressBar
                    value={40}
                    color="primary"
                    text="Usuarios registrados (63)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={30}
                    color="secondary"
                    text="Pacientes (28)"
                />
                <div className="py-1" />
                <MatxProgressBar
                    value={80}
                    color="primary"
                    text="Terapeutas (16)"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns
