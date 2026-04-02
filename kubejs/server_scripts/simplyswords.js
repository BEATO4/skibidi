ServerEvents.recipes(event => {
		event.remove({ output: 'simplyswords:tainted_relic' }), 
		event.remove({ output: 'simplyswords:righteous_relic' }), 
		event.remove({ output: 'simplyswords:sunfire' }), 
		event.remove({ output: 'simplyswords:harbinger' }), 
		event.remove({ output: 'simplyswords:waking_lichblade' }), 
		event.remove({ output: 'simplyswords:awakened_lichblade' }), 
		event.remove({ output: 'simplyswords:runefused_gem'}),
		event.remove({ output: 'simplyswords:netherfused_gem'})

		//Hephaestus forge recipes are located in paxi/config/datapacks/forbidden_arcanus/hephaestus_forge/
	}
)